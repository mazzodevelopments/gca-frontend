import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClienteService} from "../cliente.service";
import {Cliente} from "../cliente";
import {take} from "rxjs";

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  clienteId: string | null = null;
  cliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    direccion: '',
    fechaNacimiento: new Date(),
    telefono: '',
    pais: ''
  };

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clienteId = params.get('id');
      if (this.clienteId) {
        this.clienteService.getCliente(this.clienteId)
          .pipe(take(1))
          .subscribe(cliente => {
            this.cliente = cliente[0];
          });
      } else {
        console.error('Cliente ID no encontrado en la URL');
      }
    });
  }
}
