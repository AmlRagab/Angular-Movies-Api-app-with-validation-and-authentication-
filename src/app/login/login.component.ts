import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSuccess = false;
  issign = false;
  isdanger=false;
  responemsg: any;


  loginform = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  })
  
  constructor(public _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }
  logindata(data) {
    if (data.valid)
     { 

      this.issign = true;


      this._AuthService.login(data.value).subscribe(respone => { 

        console.log(respone);

        if (respone.message == "success") {
          this._AuthService.savelogindata(respone.user,respone.token);
          this.isdanger=false;
          this.responemsg = respone.message;
          this.isSuccess = true;
          this.loginform.reset();
          this.issign = false;
          this._Router.navigate(["/home"])

        }
        else{this.isdanger=true;
          this.loginform.reset();

        this.issign=false;}


      })
    }

  }
}
