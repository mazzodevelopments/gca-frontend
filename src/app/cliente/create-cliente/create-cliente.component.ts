import {Component, OnInit} from '@angular/core';
import {Cliente} from "../cliente";
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  showModal = false;

  cliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    direccion: '',
    fechaNacimiento: new Date(),
    telefono: '',
    pais: ''
  };

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  onSubmit(cliente: Cliente) {
    console.log(cliente);
  }
}
