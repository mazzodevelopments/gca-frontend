import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "./cliente";

interface CreateCliente {
  nombre: string;
  apellido: string;
  direccion: string;
  fechaNacimiento: string;
  telefono: string;
  pais: string;
}

export interface ClientesHomePageResponse {
  id: string,
  nombre: string,
  apellido: string
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  getClientesHomePage() {
    return this.http.get<ClientesHomePageResponse[]>('/api/clients');
  }

  getCliente(id: string) {
    return this.http.get<Cliente[]>('/api/client');
  }
}
