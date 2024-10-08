import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from '../cliente';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
  @Input() cliente!: Cliente;
  clienteForm!: FormGroup;
  @Output() submitCliente = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const {nombre, apellido, direccion, fechaNacimiento, telefono, pais} = this.cliente;
    this.clienteForm = this.fb.group({
      nombre: new FormControl(nombre, [Validators.required]),
      apellido: new FormControl(apellido, [Validators.required]),
      direccion: new FormControl(direccion, [Validators.required]),
      fechaNacimiento: new FormControl(this.formatDate(fechaNacimiento), [Validators.required, this.validarFecha]),
      telefono: new FormControl(telefono, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      pais: new FormControl(pais, [Validators.required])
    });
  }

  formatDate(date: Date): string {
    return date ? new Date(date).toISOString().substring(0, 10) : '' // YYYY-MM-DD
  }

  onSubmit() {
    if (this.clienteForm.invalid) {
      return;
    }
    this.submitCliente.emit(this.clienteForm.value);
  }

  validarFecha(control: FormControl): { [key: string]: boolean } | null {
    const fecha = new Date(control.value);
    const fechaActual = new Date();
    if (fecha >= fechaActual) {
      return {fechaInvalida: true};
    }
    return null;
  }
}
