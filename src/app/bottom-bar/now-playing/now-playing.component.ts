import { Component, Input, OnInit } from '@angular/core';
import { Library, Song } from '../../songs';

import { SongService } from '../../song.service';

@Component({
  selector: 'now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  likedSongs: Library | undefined;
  @Input() currentSong: Song | undefined;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.updateCurrentSong();
  }

  updateCurrentSong(): void {
    this.currentSong = this.songService.getCurrentSong();
  }

  likeSong(song: Song) {
    this.songService.likeSong(song);
  }
}
