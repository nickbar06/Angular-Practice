import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocketService } from 'src/app/socket.service';
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
    private songService: SongService,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.currentSong = this.songService.currentSong;
  }

  skipSong(): void {
    this.socketService.emit('skip_song');
  }

  backSong(): void {
    this.socketService.emit('back_song');
  }
}
