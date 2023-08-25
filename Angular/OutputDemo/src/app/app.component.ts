import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

  temp:any;

  opdata:any;


getData(value:any){
this.temp = value;
}

recieveData(data:any){
 this.opdata = data;
  console.log('Hello Iam in Parent Component : '+ data);
}



}
