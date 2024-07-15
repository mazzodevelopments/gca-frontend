import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GestorRoutingModule} from './gestor-routing.module';
import {HomeComponent} from './home/home.component';
import {ClienteModule} from "../cliente/cliente.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GestorRoutingModule,
    ClienteModule
  ]
})
export class GestorModule {
}
