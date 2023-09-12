import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{

  isChild=false;



  data:any
  getData(item:any){
      this.data = item;
  }

  diplayChild(){
    this.isChild = !this.isChild;
  }

  ngOnInit(){
    console.log('NgOnInit --- AppComponent');
  }

  
}
