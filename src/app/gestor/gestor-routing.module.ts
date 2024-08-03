import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShowClienteComponent} from "../cliente/show-cliente/show-cliente.component";
import {ShowPolizaComponent} from "../poliza/show-poliza/show-poliza.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':clienteId',
    component: ShowClienteComponent
  },
  {
    path: ':clienteId/poliza/:polizaId',
    component: ShowPolizaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestorRoutingModule {
}
