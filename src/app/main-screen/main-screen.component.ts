import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  currentView!: String;

  constructor(private authService: AuthService) { }

  isAuthenticated(): boolean {
    return this.authService.checkAuthentication();
  }

  onViewChanged(view: String) {
    this.currentView = view;
  }
}