import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe'
})
export class AgepipePipe implements PipeTransform {

  transform(age: any){
    
    if(age>18){
      return 'Adult'
    }

    return 'Child';
  }

}
