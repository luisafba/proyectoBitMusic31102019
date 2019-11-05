import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-cancion',
  templateUrl: './item-cancion.component.html',
  styleUrls: ['./item-cancion.component.css']
})
export class ItemCancionComponent implements OnInit {

  @Input() cancion: any;
  @Input() edit = false;

  @Output() addCancion = new EventEmitter<any>();
  @Output() deleteCancion = new EventEmitter<string>();

  constructor( ) {}

  ngOnInit() {
  }

  handlerClickAgregar($event) {
    this.addCancion.emit(this.cancion);
  }

  handlerClickBorrar($event) {
    this.deleteCancion.emit(this.cancion._id);
  }

}
