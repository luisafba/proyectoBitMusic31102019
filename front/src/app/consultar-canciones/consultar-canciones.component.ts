import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from '../servicios/cancion.service';
import { Cancion } from "../modelos/cancion.module";
import { ConfirmacionDialogComponent, ConfirmacionDialogModel } from '../confirmacion-dialog/confirmacion-dialog.component';
import { MatDialog } from '@angular/material';
import { NotificacionService } from '../servicios/notificacion.service';

@Component({
  selector: 'app-consultar-canciones',
  templateUrl: './consultar-canciones.component.html',
  styleUrls: ['./consultar-canciones.component.css']
})
export class ConsultarCancionesComponent implements OnInit {

  @ViewChild('audioOption', {static: false}) audioPlayerRef: ElementRef;


  displayedColumns: string[] = ['id','titulo'];
  data: Cancion[] = [];
  isLoadingResults = true;
  cancionSeleccionada :string;

  constructor(private router: Router, private _cancionservice: CancionService,
    public dialog: MatDialog, private notificacionService: NotificacionService) { }

  ngOnInit() {
    this._cancionservice.getCanciones()
      .subscribe((res: any) => {
        this.data = res.canciones;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
      
  }

  deleteCancion(cancion: Cancion) {
    const message = "Seguro desea borrar la canción ("+cancion._id+")?";
    const datos=["Canción: "+cancion.titulo,"Artista: "+cancion.artista];
    //this.notificacionesBus.showSuccess('Proceso con éxito');
    const dialogData = new ConfirmacionDialogModel("Confirmar Borrado", message, datos);
 
    const dialogRef = this.dialog.open(ConfirmacionDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
 
    dialogRef.afterClosed().subscribe(dialogResult => {
      
      if(dialogResult){
        console.log(cancion._id+"borrar");
        this.isLoadingResults = true;
        this._cancionservice.deleteCancion(cancion._id)
          .subscribe(res => {
              this.isLoadingResults = false;
              this.ngOnInit();
              this.notificacionService.success("Se eliminó la canción correctamente!");
            }, (err) => {
              console.log(err);
              this.isLoadingResults = false;
            }
          );
      }
    }); 
  }
  escucharCancion(cancion: Cancion) {
    this.cancionSeleccionada = "Titulo:"+cancion.titulo+" - Artista: "+cancion.artista+" - Genero:"+cancion.genero;
    this.audioPlayerRef.nativeElement.src =cancion.archivo;
    this.audioPlayerRef.nativeElement.play();
  }
}
