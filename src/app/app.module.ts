import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TopTemplateComponent } from './top-template/top-template.component';


@NgModule({
  declarations: [
    AppComponent,
    TopTemplateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
