import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges, SimpleChanges, 
    DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked } from "@angular/core";
import { GreetService } from "./greet.service";


@Component({
    selector: 'demo-comp',
    templateUrl: 'demo.html'
})
export class DemoComponent implements OnInit, OnDestroy, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked {
    count = 0;

    @Input()
    msg: any;

    constructor(){
        console.log('Hello Iam Constructor DOnt forget me')
    }
    
    ngOnInit() {
        console.log('NgOnInit --- DemoComponent');
    }

    ngOnDestroy() {
        console.log('NgOnDestroy --- DemoComponent');
    }

    ngOnChanges(simple: SimpleChanges) {
        console.log('NgOnChanges --- DemoComponent');
        console.log(simple);
    }

    ngDoCheck() {
        console.log('NgDocheck --- DemoComponent');
    }

    ngAfterContentInit() {
        console.log('NgAfterContentInit --- DemoComponent');
    }
    ngAfterContentChecked() {
        console.log('NgAfterContentChecked --- DemoComponent');
    }
    ngAfterViewInit(){
        console.log('NgAfterViewInit --- DemoComponent');
    }

    ngAfterViewChecked(){
        console.log('NgAfterViewChecked --- DemoComponent');
    }

    
}