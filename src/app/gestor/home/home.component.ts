import {Component} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.username;
  }
}
