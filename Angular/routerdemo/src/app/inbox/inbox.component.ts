import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {

  username:any;

  constructor(private router:ActivatedRoute){

  }

  ngOnInit(){

    this.username = this.router.snapshot.params['uname'];
    console.log(this.username);
  }
}
