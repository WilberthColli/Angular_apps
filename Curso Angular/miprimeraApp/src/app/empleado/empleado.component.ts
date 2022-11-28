import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:'<p>Dua Lipaaaaaaaa!</p>  ',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Diaz";

  edad=18;

  //empresa="Pildoras XD";

  // getEdad() {

  //   return this.edad
  // }

  llamaEmpresa(value:String){

  }

  habilitacionCuadro=false;

  usoRegistrado=true;

  textoDeRegistro="No hay nadie registradi";

  getRegistroUsuario() {
    this.usoRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuarionadigsdh");
    //this.textoDeRegistro="El susoher"
    //alert(event.target)
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="Usuario Registrado";
    }else{
      this.textoDeRegistro="Usuario no Registrado";
    }
  }
  constructor(){}

  ngOnInit(): void {
      
  }
}
