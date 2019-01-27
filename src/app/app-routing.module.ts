import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
const routes: Routes = [];

@NgModule({
  imports: [BsDropdownModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
