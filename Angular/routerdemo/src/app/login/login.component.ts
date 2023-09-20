import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }

  loginsuccess(values:any){
   if(values.password==='1234'){
      this.router.navigate(['inbox/'+values.username]);
   }else{
    alert('login faild');
   }
  }
}
