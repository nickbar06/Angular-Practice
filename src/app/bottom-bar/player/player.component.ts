import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { Song } from 'src/app/songs';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Output() songChanged = new EventEmitter<Song>();
  currentSong: Song | undefined;
  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.currentSong = this.songService.currentSong;
  }

  skip() {
    const newSong = this.songService.skipForward();
    this.songChanged.emit(newSong);
  }

  skipBack() {
    const newSong = this.songService.skipBack();
    this.songChanged.emit(newSong);
  }
}
