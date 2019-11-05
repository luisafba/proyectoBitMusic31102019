import { Component, OnInit } from "@angular/core";
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CancionService } from '../servicios/cancion.service';
import {Cancion} from '../modelos/cancion.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "actualizar-cancion",
  templateUrl: "./actualizar-cancion.component.html",
  styleUrls: ["./actualizar-cancion.component.css"]
})
export class ActualizarCancionComponent implements OnInit {
  constructor(
    private _cancionService: CancionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    cancion: Cancion = {} as Cancion;

  ngOnInit() {

    let cancionOriginal = this._cancionService.obtenerUsuario();
      this.poblar(usuarioOriginal);
  

  }

  enviar() {
    console.log(this.cancionForm.value);
    this._cancionservice.postCancion(this.cancionForm.value).subscribe(response=>{
      alert ('Se creó la canción correctamente') // En angular material ya hay mensajes prestablecidos 
    })
  }
  onSelectFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.cancionForm.patchValue({
      archivo: file
    });
    this.cancionForm.get('archivo').updateValueAndValidity()

  }

}
