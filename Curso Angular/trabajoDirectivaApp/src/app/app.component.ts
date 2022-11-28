import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';

  mensaje ="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:object[];

  constructor() {

    this.entradas=[
      {titulo:"Python cada diasasiajdks"},
      {titulo:"Java cada diasasiajdks"},
      {titulo:"JavaScript cada diasasiajdks"},
      {titulo:"Php cada diasasiajdks"},
      {titulo:"Mysql cada diasasiajdks"},

    ]

  }
  registrarUsuario() {
    this.registrado=true

    this.mensaje="Usuario registrado con exito"
  }
}
