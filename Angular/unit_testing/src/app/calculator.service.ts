import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

 constructor(private demo:DemoService){

 }

additon(no1:number,no12:number){
return no1+no12;
}

multiply(no1:number,no12:number){
  return no1*no12;
  }

}
