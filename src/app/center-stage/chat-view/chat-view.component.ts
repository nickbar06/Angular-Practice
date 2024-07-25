import { Component, OnInit, OnDestroy } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  input: string = '';
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:4000', {
      transports: ['polling'],
      withCredentials: true
    });
  }

  ngOnInit(): void {
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket.on('connect_error', (error: any) => {
      console.error('Connection error:', error);
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    this.socket.on('new_user', (message: string) => {
      this.messages.push(message);
    });

    this.socket.on('user_left', (message: string) => {
      this.messages.push(message);
    });

    this.socket.on('chat_message', (message: any) => {
      console.log('Message received:', message);
      this.messages.push(`${message.user}: ${message.message}`);
    });
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    if (this.input.trim()) {
      this.socket.emit('chat_message', { message: this.input });
      this.input = '';
    }
  }
}
