import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms"
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
isSuccess=false;
issign=false;
  registerform = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(2)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })
  responemsg: any;
  constructor(public _AuthService: AuthService, private _Router:Router,public _AuthGuard:AuthGuard) { }
  signupdata(data) {

    if (data.valid) {
      this.issign=true;
      this._AuthService.signup(data.value).subscribe(respone => { 
        if(respone.message=="success")
      {
         console.log(respone)
         this.responemsg=respone;
        this.responemsg=respone.message;
        this.isSuccess=true;
        this.registerform.reset();
        this.issign=false;
        this._AuthGuard.canActivate
        this._Router.navigate(["/home"])
        
      }
      

    })
    }

  }
  ngOnInit(): void {
  }

}
