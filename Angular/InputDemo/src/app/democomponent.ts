import { Component, Input } from "@angular/core";


@Component({
    selector:'demo-comp',
    templateUrl:'demo.html'
})
export class DemoComponent{

    @Input()
    msg:any;

}