import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenoddpipe',
  pure:false
})
export class EvenoddpipePipe implements PipeTransform {

count = 0;

  transform(value:any) {
    this.count = this.count+1;
    console.log("Pipe Executed : " + this.count);

    if(value%2 == 0){
      return value+ ' Even Number';
    }

    return value+ ' Odd Number';
  }

}
