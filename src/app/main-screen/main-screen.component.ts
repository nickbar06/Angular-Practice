import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-screen-scomponent',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenScomponentComponent implements OnInit {
  currentView!: String;
  constructor() { }

  ngOnInit(): void {
  }

  onViewChanged(view: String) {
    this.currentView = view;
  }
}

