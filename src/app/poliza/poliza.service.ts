import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poliza} from "./poliza";

@Injectable({
  providedIn: 'root'
})
export class PolizaService {
  polizas: Poliza[] = [
    {
      id: '1',
      fechaInicio: new Date('2023-01-01'),
      fechaVencimiento: new Date('2024-01-01'),
      nombreProducto: 'Producto A',
      nombreRamo: 'Ramo 1',
      nombreCompania: 'Compañía X',
      idCliente: '1001'
    },
    {
      id: '2',
      fechaInicio: new Date('2023-02-01'),
      fechaVencimiento: new Date('2024-02-01'),
      nombreProducto: 'Producto B',
      nombreRamo: 'Ramo 2',
      nombreCompania: 'Compañía Y',
      idCliente: '1002'
    },
    {
      id: '3',
      fechaInicio: new Date('2023-03-01'),
      fechaVencimiento: new Date('2024-03-01'),
      nombreProducto: 'Producto C',
      nombreRamo: 'Ramo 3',
      nombreCompania: 'Compañía Z',
      idCliente: '1003'
    },
    {
      id: '4',
      fechaInicio: new Date('2023-04-01'),
      fechaVencimiento: new Date('2024-04-01'),
      nombreProducto: 'Producto D',
      nombreRamo: 'Ramo 1',
      nombreCompania: 'Compañía X',
      idCliente: '1004'
    },
    {
      id: '5',
      fechaInicio: new Date('2023-05-01'),
      fechaVencimiento: new Date('2024-05-01'),
      nombreProducto: 'Producto E',
      nombreRamo: 'Ramo 2',
      nombreCompania: 'Compañía Y',
      idCliente: '1005'
    },
    {
      id: '6',
      fechaInicio: new Date('2023-06-01'),
      fechaVencimiento: new Date('2024-06-01'),
      nombreProducto: 'Producto F',
      nombreRamo: 'Ramo 3',
      nombreCompania: 'Compañía Z',
      idCliente: '1006'
    },
    {
      id: '7',
      fechaInicio: new Date('2023-07-01'),
      fechaVencimiento: new Date('2024-07-01'),
      nombreProducto: 'Producto G',
      nombreRamo: 'Ramo 1',
      nombreCompania: 'Compañía X',
      idCliente: '1007'
    },
    {
      id: '8',
      fechaInicio: new Date('2023-08-01'),
      fechaVencimiento: new Date('2024-08-01'),
      nombreProducto: 'Producto H',
      nombreRamo: 'Ramo 2',
      nombreCompania: 'Compañía Y',
      idCliente: '1008'
    },
    {
      id: '9',
      fechaInicio: new Date('2023-09-01'),
      fechaVencimiento: new Date('2024-09-01'),
      nombreProducto: 'Producto I',
      nombreRamo: 'Ramo 3',
      nombreCompania: 'Compañía Z',
      idCliente: '1009'
    },
    {
      id: '10',
      fechaInicio: new Date('2023-10-01'),
      fechaVencimiento: new Date('2024-10-01'),
      nombreProducto: 'Producto J',
      nombreRamo: 'Ramo 1',
      nombreCompania: 'Compañía X',
      idCliente: '1010'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getPoliza() {
    return this.polizas[1]
    // TODO
  }

  getAllPolizas() {
    return this.polizas;
    // TODO
  }

  createPoliza() {
    // TODO
  }

  editPoliza() {
    // TODO
  }

  deletePoliza(polizaId: string) {
    console.log(polizaId);
    // TODO
  }
}
