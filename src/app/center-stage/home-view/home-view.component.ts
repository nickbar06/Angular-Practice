import { Component, Input, OnInit } from '@angular/core';
import { Library, libraries } from 'src/app/songs';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  showAnnouncement = true;
  libraries: Library[] = [];
  constructor() { }

  ngOnInit(): void {
    this.libraries = libraries;
  }

  toggleAnnouncement(): void {
    this.showAnnouncement = !this.showAnnouncement;
  }
}
