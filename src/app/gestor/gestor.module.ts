import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GestorRoutingModule} from './gestor-routing.module';
import {HomeComponent} from './home/home.component';
import {ClienteModule} from "../cliente/cliente.module";
import {PolizaModule} from "../poliza/poliza.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GestorRoutingModule,
    ClienteModule,
    PolizaModule
  ]
})
export class GestorModule {
}
