import {Component, Input} from '@angular/core';
import {Cliente} from "../cliente";

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrl: './edit-cliente.component.css'
})
export class EditClienteComponent {
  @Input() cliente!: Cliente;
  showModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(cliente: Cliente) {
    console.log(cliente);
  }
}
