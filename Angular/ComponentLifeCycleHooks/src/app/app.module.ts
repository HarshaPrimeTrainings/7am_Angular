import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { FirstComponent } from './firstcomponent';
import { HomeComponent } from './home/home.component';
import { ProdComponent } from './prod/prod.component';
import { DemoDirective } from './demo.directive';
import { TaxPipe } from './tax.pipe';
import { AgepipePipe } from './agepipe.pipe';
import { EvenoddpipePipe } from './evenoddpipe.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,DemoComponent,FirstComponent, HomeComponent, ProdComponent, DemoDirective, TaxPipe, AgepipePipe, EvenoddpipePipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
