import { Component, OnInit } from '@angular/core';
import { CrudService  } from '../services/crud.service';

@Component({
  selector: 'app-top-template',
  templateUrl: './top-template.component.html',
  styleUrls: ['./top-template.component.scss']
})
export class TopTemplateComponent implements OnInit {

  public tops = []

  constructor( public _crud: CrudService) { }

  ngOnInit() {
    this._crud.getTops().subscribe ( ( data : any ) => {
      this.tops = [];
      console.log(data)
      data.forEach((data2 : any) => {
        this.tops.push( data2.payload.doc.data())
      } )
      console.log(this.tops)
    } )
  }

}
