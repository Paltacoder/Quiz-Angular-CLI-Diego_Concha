import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {listaGente, Usuario} from "../../interface/usuario";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  listaGente:Array<Usuario> = listaGente;

  constructor(public fb: FormBuilder) {

    this.formulario= this.fb.group({

      titulo:["", [Validators.required]]

    });

    this.titulo= this.formulario.controls["titulo"];
  }

  ngOnInit(): void {
  }

}
