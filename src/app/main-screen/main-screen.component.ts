import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit{
  currentView!: String;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentView = 'homeView'; 
  }

  isAuthenticated(): boolean {
    return this.authService.checkAuthentication();
  }

  onViewChanged(view: String) {
    this.currentView = view;
  }
}