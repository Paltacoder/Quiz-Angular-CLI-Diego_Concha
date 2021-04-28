import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {} from "../app/components/header/header.component";
import {VistaCardComponent} from "../app/components/vista-card/vista-card.component";
import {ListaComponent} from "../app/components/lista/lista.component";
import {AdicionarComponent} from "../app/components/adicionar/adicionar.component";


const routes: Routes = [
  {path: "", component:VistaCardComponent},
  {path: "lista", component:ListaComponent},
  {path: "adicionar", component:AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
