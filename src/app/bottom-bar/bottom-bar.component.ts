import { Component, OnInit } from '@angular/core';
import { Song } from '../songs';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {
  currentSong!: Song;

  constructor() { }

  ngOnInit(): void {
  }

  onSongChanged(newSong: Song): void {
    this.currentSong = newSong;
  }
}
