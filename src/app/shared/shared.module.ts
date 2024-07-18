import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from './modal/modal.component';
import {DetailItemComponent} from './detail-item/detail-item.component';


@NgModule({
  declarations: [
    InputComponent,
    ModalComponent,
    DetailItemComponent
  ],
  exports: [
    InputComponent,
    ModalComponent,
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
