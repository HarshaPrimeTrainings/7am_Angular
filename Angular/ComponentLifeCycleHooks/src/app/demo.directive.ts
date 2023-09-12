import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private el:ElementRef) {
    console.log('Demo Deirectieve Applied');
    el.nativeElement.style='background-color:red';
    el.nativeElement.style='font-style: italic';
   
   }

}
