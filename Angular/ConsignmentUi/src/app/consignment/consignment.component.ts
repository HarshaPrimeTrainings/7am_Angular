import { Component } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { ConsignmentModel } from '../ConsignmentModel';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent {

  consignemtns:ConsignmentModel[]=[];

  constructor(private consignmetservice:ConsignmentService,private router:Router){

  }

  ngOnInit(){
    this.consignmetservice.getConsigments().subscribe(data=>{
      this.consignemtns = data;
    },err=>{
      this.router.navigate(['login']);
    });
  }

}
