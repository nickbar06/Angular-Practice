import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/socket.service';
@Component({
  selector: 'chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  newMessage: string = '';
  messages: { user: string, message: string }[] = [{ user: "Ira", message: "hell yea" }];
  lobby: string = '';
  user: any;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.connect();

    this.socketService.onConnect().subscribe(() => {
      this.socketService.emit('get_current_song');
    });

    this.socketService.onCurrentSong().subscribe((data) => {
      this.lobby = data.artist;
      this.user = data.user;
    });

    this.socketService.onChatMessage().subscribe((msg: { user: string, message: string }) => {
      console.log(this.messages);
      this.messages.push(msg);
    });
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    if (this.newMessage.trim()) {
      this.socketService.emit('chat_message', { message: this.newMessage });
      this.newMessage = '';
    }
  }
}
