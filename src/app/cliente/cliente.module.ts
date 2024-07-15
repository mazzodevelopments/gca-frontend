import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateClienteComponent} from './create-cliente/create-cliente.component';
import {EditClienteComponent} from './edit-cliente/edit-cliente.component';
import {FormClienteComponent} from './form-cliente/form-cliente.component';
import {DeleteClienteComponent} from './delete-cliente/delete-cliente.component';
import {ShowClienteComponent} from './show-cliente/show-cliente.component';
import {SearchClientesComponent} from './search-clientes/search-clientes.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateClienteComponent,
    EditClienteComponent,
    FormClienteComponent,
    DeleteClienteComponent,
    ShowClienteComponent,
    SearchClientesComponent
  ],
  exports: [
    CreateClienteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule {
}
