import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentComponent } from './consignment/consignment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:ConsignmentComponent},
  {path:'consignments',component:ConsignmentComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
