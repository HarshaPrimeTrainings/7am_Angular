import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  temp:any;

getData(value:any){
this.temp = value;
}

}
