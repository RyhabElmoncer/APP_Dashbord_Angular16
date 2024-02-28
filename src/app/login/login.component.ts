import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    // Logique de connexion ici

    // Rediriger vers la page home après la connexion
    this.router.navigate(['/dashboard']);
  }
}
