import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cliente} from "../cliente";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css'
})
export class FormClienteComponent {
  @Input() cliente?: Cliente;
  clienteForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl(new Date(), Validators.required),
    telefono: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required])
  })
  @Output() submitCliente = new EventEmitter();

  onSubmit() {
    if (this.clienteForm.invalid) {
      return;
    }

    this.submitCliente.emit(this.clienteForm.value);
  }
}
