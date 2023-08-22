import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

result:number=0;

addition(no1:any,no2:any){
  this.result = Number(no1)+Number(no2);
} 

subtraction(no1:any,no2:any){
  this.result = Number(no1)-Number(no2);
} 

multiply(no1:any,no2:any){
  this.result = Number(no1)*Number(no2);
}

division(no1:any,no2:any){
  this.result = Number(no1)/Number(no2);
}

}
