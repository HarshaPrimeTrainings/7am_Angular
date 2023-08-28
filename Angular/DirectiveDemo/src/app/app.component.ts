import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

  isApply=false;

  age=0;

  cources = ['CoreJava','Adv java','Hibernate','Spring','Angular'];


  isEligible(value:any){
    this.age = value; 
  }

  applyStyle(active:any){   
    console.log(active.target.checked);
      
      this.isApply = active.target.checked;
  }

}
