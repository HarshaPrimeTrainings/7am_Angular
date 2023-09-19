import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any) {
    if(value<500000){
      return  'Tax is 0% for '+ value;
    }
    if(value>500000 && value< 700000){
      return 'Tax is 10% for '+ value;
    }

    return 'Tax is 30% for '+ value;

  }

}
