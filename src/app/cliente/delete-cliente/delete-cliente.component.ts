import {Component, Input} from '@angular/core';
import {ClienteService} from "../cliente.service";
import {Cliente} from "../cliente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrl: './delete-cliente.component.css'
})
export class DeleteClienteComponent {
  @Input() cliente!: Cliente;
  showModal = false;

  constructor(private clienteService: ClienteService, private router: Router) {
  }

  deleteCliente() {
    this.clienteService.deleteCliente(this.cliente.id)
    this.showModal = false;
    this.router.navigateByUrl('gestor');
  }
}
