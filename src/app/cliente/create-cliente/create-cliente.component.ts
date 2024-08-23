import {Component, OnInit} from '@angular/core';
import {Cliente} from "../cliente";
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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(cliente: Cliente) {
    console.log(cliente);
    // AL CREAR EL CLIENTE EL BACKEND VA A MANDAR ID DEL CLIENTE PARA REDIRIGIR
    const id = '1'; // TEST DATA
    // REDIRECT POST CREAR
    this.router.navigateByUrl(`/gestor/${id}`)
  }
}
