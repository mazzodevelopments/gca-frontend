import {Component, Input} from '@angular/core';
import {Poliza} from "../poliza";
import {PolizaService} from "../poliza.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-poliza',
  templateUrl: './delete-poliza.component.html',
  styleUrl: './delete-poliza.component.css'
})
export class DeletePolizaComponent {
  @Input() poliza!: Poliza;
  @Input() clienteId: string | null = null;
  showModal = false;

  constructor(
    private polizaService: PolizaService,
    private router: Router
  ) {
  }

  deletePoliza() {
    this.polizaService.deletePoliza(this.poliza.id);
    this.showModal = false;
    this.router.navigateByUrl(`/gestor/${this.clienteId}`)
  }
}
