import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  islogged=true;
  constructor(private loginService:LoginService,private route:Router){

  }

  login(creds:any){
    this.loginService.login(creds).subscribe(
      data=>{
        let authtoken = data.token;
        localStorage.setItem("jwt",authtoken);
        this.islogged = true;
        this.route.navigate(['consignments']);
      
      },
      err=>{
        this.islogged = false;
      });

  }
}
