import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TopTemplateComponent } from './top-template/top-template.component';
import {TOPComponent} from './top/top.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormularioComponent } from './formulario/formulario.component' 


const routes: Routes = [
  { path: 'top1', component: TOPComponent},
  {path: 'formulario', component: FormularioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),BsDropdownModule.forRoot(),RatingModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
