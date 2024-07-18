import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent {
  private _value: string = '';

  @Input() label: string = '';

  @Input()
  set value(value: string | null) {
    this._value = value ?? 'No disponible';
  }

  get value(): string {
    return this._value;
  }
}
