import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clientID: String = environment.SPOTIFY_CLIENT_ID;
  redirectURI: String = environment.SPOTIFY_REDIRECT_URI;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login();
  }
}
