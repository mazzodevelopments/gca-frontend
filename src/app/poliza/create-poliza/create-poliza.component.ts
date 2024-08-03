import {Component, OnInit} from '@angular/core';
import {Poliza} from "../poliza";

@Component({
  selector: 'app-create-poliza',
  templateUrl: './create-poliza.component.html',
  styleUrl: './create-poliza.component.css'
})
export class CreatePolizaComponent implements OnInit {
  showModal = false;
  poliza: Poliza = {
    id: '',
    fechaInicio: new Date(),
    fechaVencimiento: new Date(),
    nombreProducto: '',
    nombreRamo: '',
    nombreCompania: '',
    idCliente: ''
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(poliza: Poliza) {
    console.log(poliza);
  }
}
