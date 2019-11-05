import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Cancion } from "../modelos/cancion.module";
import { map } from 'rxjs/operators';
  
@Injectable({
  providedIn: 'root'
})
export class CancionService {

readonly httpOptions = {
    //headers: new HttpHeaders({'Content-Type': 'application/json'})
    //headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
    //headers: new HttpHeaders({ "Accept": "application/json" })
  };

//readonly Url_API = 'http://localhost:3000/api/cancion'
readonly Url_API = 'http://localhost:3000/api/canciones'

  constructor(private http: HttpClient) { }

  private cancion: Cancion = null;


  getCancion(): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.Url_API);
  }
  postCancion(cancion:Cancion): Observable<Cancion> {
      var formData: any = new FormData();
      formData.append("titulo", cancion.titulo);
      formData.append("duracion", cancion.duracion);
      formData.append("genero", cancion.genero);
      formData.append("artista", cancion.artista);
      formData.append("archivo", cancion.archivo);
      return this.http.post<Cancion>(this.Url_API, formData, this.httpOptions);
  }

  setCancion(cancion: Cancion) {
    this.cancion = cancion;
  }

  editarUsuario(cancion: Cancion) {
    return this.http.put<Cancion>(`${this.Url_API}/${cancion.id}`, cancion);
  }

  obtenerUsuarios() {
    return this.http.get<Cancion[]>(`${this.Url_API}/canciones`).pipe(
      map((res: any) => {
        return res.canciones;
      })
    );
  }
}
