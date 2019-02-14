import { Component, OnInit } from '@angular/core';
import { CrudService  } from '../services/crud.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})

export class TOPComponent {

  title = 'Tops';
  x: number = 3;
  y: number = 1;

  public tops = []

  constructor( public _crud: CrudService) { }

  ngOnInit() {
    this._crud.getTops().subscribe ( ( data : any ) => {
      this.tops = [];
      data.forEach((data2 : any) => {
        this.tops.push( data2.payload.doc.data())
        console.log(data2.payload.doc.data())
      } )
      console.log(this.tops)
    } )

   // console.log(this.tops[1].miembros[1].imagen)
   // console.log(this.tops[1].miembros[1])
    

  }
  }
