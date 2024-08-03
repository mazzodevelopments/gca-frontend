import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowPolizaComponent} from './show-poliza/show-poliza.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ShowPolizaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ]
})
export class PolizaModule {
}
