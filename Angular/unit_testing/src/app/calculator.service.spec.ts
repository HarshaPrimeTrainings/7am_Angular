import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { DemoService } from './demo.service';

describe('Calculator Service Testing',()=>{

  let calc:CalculatorService;
  let demo:DemoService;

beforeEach(()=>{
  console.log('Before Each');
  TestBed.configureTestingModule({
    providers:[CalculatorService,DemoService]
  });

  demo = TestBed.inject(DemoService)
  calc =   TestBed.inject(CalculatorService);
});

it('should add two numbers',()=>{
  let res = calc.additon(2,3);
  expect(res).toBe(5);
});

it('should multiply two numbers',()=>{
  let res = calc.multiply(2,3);
  expect(res).toBe(6);
});


});
