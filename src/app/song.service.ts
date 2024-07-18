import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song, likedSongs } from '../app/songs';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongService implements OnInit {
  currentSong!: Song;
  songs: Song[] = [];
  index: number = 0;

  constructor(
    private http: HttpClient,
  ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.currentSong = likedSongs.songs[this.index];
  }

  likeSong(song: Song) {
    song.liked = !song.liked;
  }

  playSong(song: Song) {
    //TODO
  }

  skipBack() {
    this.index = this.index === 0 ? likedSongs.songs.length - 1 : this.index - 1;
    this.currentSong = likedSongs.songs[this.index];
    return this.currentSong;
  }

  skipForward() {
    this.index = this.index === likedSongs.songs.length - 1 ? 0 : this.index + 1;
    this.currentSong = likedSongs.songs[this.index];
    return this.currentSong;
  }

  getCurrentSong() {
    return this.currentSong;
  }
}
