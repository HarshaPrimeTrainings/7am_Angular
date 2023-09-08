import { Component } from '@angular/core';
import { GreetService } from './greet.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

  users:any;

  constructor(private userservice:UserService){

  }

  showUsers(){
    this.userservice.getUsers().subscribe(data => this.users= data);
  }


}
