import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Library, libraries } from 'src/app/songs';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  showAnnouncement = true;
  libraries: Library[] = [];
  @Output() viewChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.libraries = libraries;
  }

  toggleAnnouncement(): void {
    this.showAnnouncement = !this.showAnnouncement;
  }


  navigateToChat(): void {
    this.viewChanged.emit('chatView');
  }
}
