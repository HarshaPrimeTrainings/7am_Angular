import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './loginmodel';
import { Observable } from 'rxjs';
import { JwtModel } from './jwtModel';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(payload:LoginModel):Observable<JwtModel>{
      return this.http.post<JwtModel>("http://localhost:8080/login",payload);
  }


}
