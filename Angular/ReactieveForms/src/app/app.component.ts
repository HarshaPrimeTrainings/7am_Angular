import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {


signupForm:FormGroup = new FormGroup({});


ngOnInit(){
  this.signupForm = new FormGroup({
    'usrname':new FormControl(null,Validators.required),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'contact': new FormControl(null)
  });
}

getData(){
console.log(this.signupForm);
}

  
}
