import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'demo-comp',
    templateUrl:'demo.html'
})
export class DemoComponent{

    @Input()
    msg:any;

    @Output()
    sendData = new EventEmitter();

    @Output()
    userName = new EventEmitter();


    setUserName(us:any){
        this.userName.emit(us);
    }

    releaseData(dt:any){
        this.sendData.emit(dt);
       
    }


}