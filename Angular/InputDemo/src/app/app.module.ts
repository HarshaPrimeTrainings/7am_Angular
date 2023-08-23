import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { FirstComponent } from './firstcomponent';
import { HomeComponent } from './home/home.component';
import { ProdComponent } from './prod/prod.component';

@NgModule({
  declarations: [
    AppComponent,DemoComponent,FirstComponent, HomeComponent, ProdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
