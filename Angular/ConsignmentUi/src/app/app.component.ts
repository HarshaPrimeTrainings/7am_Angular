import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consignmentapp';
isLoggedIn:any;

constructor(private route:Router){

}
  ngOnInit(){
    if(localStorage.getItem("jwt")){
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
