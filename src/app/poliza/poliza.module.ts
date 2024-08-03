import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowPolizaComponent} from './show-poliza/show-poliza.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormPolizaComponent} from './form-poliza/form-poliza.component';
import {CreatePolizaComponent} from './create-poliza/create-poliza.component';
import {EditPolizaComponent} from './edit-poliza/edit-poliza.component';
import {DeletePolizaComponent} from './delete-poliza/delete-poliza.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ShowPolizaComponent,
    FormPolizaComponent,
    CreatePolizaComponent,
    EditPolizaComponent,
    DeletePolizaComponent
  ],
  exports: [
    CreatePolizaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class PolizaModule {
}
