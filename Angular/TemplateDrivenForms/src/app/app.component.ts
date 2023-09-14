import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

  isUsername = false;
  eamil = false;

getData(data:any){
 this.isUsername =  data.controls.username.status =='VALID' ? false:true;
 this.eamil =  data.controls.email.status =='VALID' ? false:true;
console.log(data.controls);
}

  
}
