import {Component, OnInit} from '@angular/core';
import {ClienteService, ClientesHomePageResponse} from "../cliente.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-clientes',
  templateUrl: './search-clientes.component.html',
  styleUrls: ['./search-clientes.component.css'] // Corrección en la propiedad
})
export class SearchClientesComponent implements OnInit {
  clientes: ClientesHomePageResponse[] = [];
  filteredClientes: ClientesHomePageResponse[] = [];

  searchForm: FormGroup = new FormGroup({
    term: new FormControl('')
  });

  constructor(private clienteService: ClienteService, private router: Router) {
  }

  ngOnInit(): void {
    this.clienteService.getClientesHomePage()
      .subscribe((clientes) => {
        this.clientes = clientes;
        this.filteredClientes = clientes;
      });


    this.searchForm.get('term')!.valueChanges.subscribe(term => {
      this.filteredClientes = this.filterClientes(term);
    });
  }

  filterClientes(term: string): ClientesHomePageResponse[] {
    return this.clientes.filter(cliente => {
      const nombreCompleto = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return nombreCompleto.includes(term.toLowerCase());
    });
  }

  goToCliente(clienteId: string): void {
    this.router.navigate([clienteId]);
  }
}
