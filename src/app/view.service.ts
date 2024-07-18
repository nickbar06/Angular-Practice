import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService implements OnInit {
  currentView!: String;
  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.currentView = "homeView";
  }

  getCurrentView() {
    return this.currentView;
  }

  setView(view: String) {
    this.currentView = view;
  }
}
