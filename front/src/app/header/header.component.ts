import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { Usuario } from '../modelos/usuario.module';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  
  busqueda = new FormControl('');
  activo = false;
  canciones: any[];
  cancionesFiltradas: any[];
  misCanciones: any[] = [];

  usuarioActual: Usuario;
  
  get(despliegueMenu) {
    this.activo = !this.activo;
  }
  
  // tslint:disable-next-line:variable-name
  constructor(
  private _loginService: LoginService, 
  private router: Router,
  private _http: HttpClient
  
  ) {
  this.busqueda.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      if (value === '') {
        this.cancionesFiltradas = [];
      } else {
        this.cancionesFiltradas = this.canciones.filter( item => item.titulo.toUpperCase().includes(value.toUpperCase()) === true );
      }
    });
  
  }

  ngOnInit() {
    this.usuarioActual = this._loginService.obtenerUsuario();
    this._http.get('http://localhost:3000/api/canciones').subscribe(
    (result: any) => {
      this.canciones = result.canciones;
      console.log(this.canciones);
    });
    
  }


  cerrarSesion() {
    this._loginService.logout();
    this.router.navigate(["/"]);
  }


  
  
}
