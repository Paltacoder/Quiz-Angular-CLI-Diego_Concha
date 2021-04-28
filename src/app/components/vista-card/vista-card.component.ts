import { Component, OnInit } from '@angular/core';
import {listaGente, Usuario} from "../../interface/usuario";

@Component({
  selector: 'app-vista-card',
  templateUrl: './vista-card.component.html',
  styleUrls: ['./vista-card.component.scss']
})
export class VistaCardComponent implements OnInit {

  listaGente:Array<Usuario> = listaGente;

  constructor() { }

  ngOnInit(): void {
  }

}
