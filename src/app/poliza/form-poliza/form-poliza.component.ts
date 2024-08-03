import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Poliza} from "../poliza";

@Component({
  selector: 'app-form-poliza',
  templateUrl: './form-poliza.component.html',
  styleUrl: './form-poliza.component.css'
})
export class FormPolizaComponent implements OnInit {
  @Input() poliza!: Poliza;
  polizaForm!: FormGroup;
  @Output() submitPoliza = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const {fechaInicio, fechaVencimiento, nombreProducto, nombreCompania, nombreRamo} = this.poliza;
    this.polizaForm = this.fb.group({
      fechaInicio: new FormControl(fechaInicio, Validators.required),
      fechaVencimiento: new FormControl(fechaVencimiento, Validators.required),
      nombreProducto: new FormControl(nombreProducto, Validators.required),
      nombreCompania: new FormControl(nombreCompania, Validators.required),
      nombreRamo: new FormControl(nombreRamo, Validators.required),
    })
  }

  onSubmit() {
    if (this.polizaForm.invalid) {
      return;
    }
    this.submitPoliza.emit(this.polizaForm.value);
  }

}
