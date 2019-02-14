import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TopTemplateComponent } from './top-template/top-template.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TOPComponent } from './top/top.component';
import {FormsModule} from '@angular/forms';
//Base de datos
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { CrudService } from './services/crud.service';
import { FormularioComponent } from './formulario/formulario.component' 

@NgModule({
  declarations: [
    AppComponent,
    TopTemplateComponent,
    TOPComponent,
    FormularioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    CollapseModule,
    RatingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
 	AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
