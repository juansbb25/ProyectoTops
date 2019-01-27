import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDropdownAnchorTriggerComponent } from './demo-dropdown-anchor-trigger/demo-dropdown-anchor-trigger.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDropdownAnchorTriggerComponent 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
