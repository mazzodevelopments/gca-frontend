import {Component, OnInit} from '@angular/core';
import {Poliza} from "../poliza";
import {ActivatedRoute} from "@angular/router";
import {PolizaService} from "../poliza.service";

@Component({
  selector: 'app-show-poliza',
  templateUrl: './show-poliza.component.html',
  styleUrl: './show-poliza.component.css'
})
export class ShowPolizaComponent implements OnInit {
  clientId: string | null = null;
  polizaId: string | null = null;
  poliza: Poliza = {
    id: '',
    fechaInicio: new Date(),
    fechaVencimiento: new Date(),
    nombreProducto: '',
    nombreRamo: '',
    nombreCompania: '',
    idCliente: ''
  }

  constructor(
    private route: ActivatedRoute,
    private polizaService: PolizaService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.polizaId = params.get('polizaId');
      this.clientId = params.get('clientId');
      if (this.polizaId) {
        this.poliza = this.polizaService.getPoliza();
      } else {
        console.error('Poliza ID no encontrado en la URL');
      }
    })
  }

}
