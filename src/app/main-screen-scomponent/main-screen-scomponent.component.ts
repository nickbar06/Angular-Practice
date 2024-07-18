import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen-scomponent',
  templateUrl: './main-screen-scomponent.component.html',
  styleUrls: ['./main-screen-scomponent.component.css']
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

