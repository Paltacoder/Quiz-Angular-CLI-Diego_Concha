import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {listaGente, Usuario} from "../../interface/usuario";

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})


export class AdicionarComponent implements OnInit {

  formulario:FormGroup;
  nombres:AbstractControl;
  apellidos:AbstractControl;
  radioGenero:AbstractControl;  
  ciudad:AbstractControl;
  pais:AbstractControl;
  listaNotas:Array<Usuario> = [];
  

  constructor(public fb:FormBuilder) {

    this.formulario=this.fb.group({
      nombres:['', [Validators.required]],
      apellidos:['', [Validators.required]],
      radioGenero:['', [Validators.required]],      
      pais:['', [Validators.required]],
      ciudad:['', [Validators.required]]

    });

    this.nombres= this.formulario.controls["nombres"];
    this.apellidos= this.formulario.controls["apellidos"];
    this.radioGenero= this.formulario.controls["radioGenero"];    
    this.ciudad= this.formulario.controls["ciudad"];
    this.pais= this.formulario.controls["pais"];

    this.listaNotas = listaGente;

  }

  ngOnInit(): void {
  }

  limpiarCampos(){
    this.nombres.setValue("");
    this.apellidos.setValue("");
    this.radioGenero.setValue("");    
    this.ciudad.setValue("");
    this.pais.setValue("");
  }

  Crear(){

    let usuario:Usuario={
      nombres: this.nombres.value,
      apellidos: this.apellidos.value,
      genero: this.radioGenero.value,
      ciudad: this.ciudad.value,
      pais: this.pais.value
    }

    this.listaNotas.push(usuario);
    console.log(this.listaNotas);

  }

}
