import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

import { ListaReproduccionComponent } from "./lista-reproduccion/lista-reproduccion.component";
import { DescargaComponent } from "./descarga/descarga.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PanelComponent } from "./panel/panel.component";
import { InfoPerfilComponent } from './info-perfil/info-perfil.component';
import { CrearCancionComponent } from './crear-cancion/crear-cancion.component';
import { ActualizarCancionComponent } from './actualizar-cancion/actualizar-cancion.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CuentaAdministradorComponent } from './cuenta-administrador/cuenta-administrador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ConsultarCancionesComponent } from './consultar-canciones/consultar-canciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminGuard } from './guards/admin.guard';
import { ItemCancionComponent } from './item-cancion/item-cancion.component';
import { CommonModule } from '@angular/common';
import { CanActivateViaAuthGuard } from './guards/auth.guard'

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,MatMenuModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ConfirmacionDialogComponent } from './confirmacion-dialog/confirmacion-dialog.component';
import { CustomMaterialModule } from './confirmacion-dialog/custom-material.module';
import { NotificacionModule } from './notificacion/notificacion.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "info-perfil",
    component: InfoPerfilComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "info-perfil/:id",
    component: InfoPerfilComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "CrearCancion",
    component: CrearCancionComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "ConsultarCanciones",
    component: ConsultarCancionesComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "ActualizarCancion/:id", 
    component: ActualizarCancionComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "form-registro",
    component: FormRegistroComponent
  },
  { path: "login", component: FormLoginComponent },
  {
    path: "descarga",
    component: DescargaComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "header",
    component: HeaderComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "footer",
    component: FooterComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "panel",
    component: PanelComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "cuenta-administrador",
    component: CuentaAdministradorComponent,
    canActivate: [CanActivateViaAuthGuard, AdminGuard]
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, CrearCancionComponent, ErrorComponent, 
        ListaReproduccionComponent, HeaderComponent, DescargaComponent, InfoPerfilComponent, ActualizarCancionComponent, 
        FormRegistroComponent, FooterComponent,PanelComponent,
        FormLoginComponent, CuentaAdministradorComponent, ConsultarCancionesComponent, 
        ConfirmacionDialogComponent, ItemCancionComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpClientModule, 
        BrowserAnimationsModule,CustomMaterialModule, NotificacionModule,
        MatInputModule, FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,MatMenuModule,
        MatCardModule,ScrollingModule,
        MatFormFieldModule,
    CommonModule],
  providers: [CanActivateViaAuthGuard, AdminGuard],
  entryComponents: [ConfirmacionDialogComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
