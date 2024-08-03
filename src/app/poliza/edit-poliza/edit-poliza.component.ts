import {Component, Input, OnInit} from '@angular/core';
import {Poliza} from "../poliza";

@Component({
  selector: 'app-edit-poliza',
  templateUrl: './edit-poliza.component.html',
  styleUrl: './edit-poliza.component.css'
})
export class EditPolizaComponent implements OnInit {
  @Input() poliza!: Poliza;
  showModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(poliza: Poliza) {
    console.log(poliza);
  }
}
