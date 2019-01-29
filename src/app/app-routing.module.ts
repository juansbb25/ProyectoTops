import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TopTemplateComponent } from './top-template/top-template.component';
const routes: Routes = [
  { path: 'top1', component: TopTemplateComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),BsDropdownModule.forRoot() ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
