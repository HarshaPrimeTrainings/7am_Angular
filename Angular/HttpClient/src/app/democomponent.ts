import { Component, EventEmitter, Input, Output } from "@angular/core";
import { GreetService } from "./greet.service";


@Component({
    selector:'demo-comp',
    templateUrl:'demo.html'
})
export class DemoComponent{
    msg='';


constructor(private gs:GreetService){

}

    greet(){
      this.msg = this.gs.getMessage();
    }
   
}