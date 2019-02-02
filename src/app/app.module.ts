import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TopTemplateComponent } from './top-template/top-template.component';

//Base de datos
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { CrudService } from './services/crud.service' 

@NgModule({
  declarations: [
    AppComponent,
    TopTemplateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    CollapseModule,
    AngularFireModule.initializeApp(environment.firebase),
 	AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
