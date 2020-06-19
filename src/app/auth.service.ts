import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { UserData } from './userData';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserData=new BehaviorSubject(null); 

  constructor(public _HttpClient: HttpClient, ) {}


  signup(data): Observable<any> {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', data)
  }
  login(data): Observable<any> {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', data)
  }
  savelogindata(citizin,token) {
   let user= new UserData(citizin.first_name , citizin.last_name, citizin.age, citizin.email, citizin.password,token);
          this.UserData.next(user);

  }
 
 
   

}
