import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { Usuario } from '../modelos/usuario.module';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  
  // tslint:disable-next-line:variable-name
  constructor() {  }

  ngOnInit() {      }
  
  
}
