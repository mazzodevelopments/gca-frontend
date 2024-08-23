import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  signedin$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/gestor');
      }
    });
  }
}
