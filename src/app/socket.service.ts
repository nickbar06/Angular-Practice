import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:4000', {
      query: { accessToken: localStorage.getItem('accessToken') || '' },
      autoConnect: false  // Prevents automatic connection
    });
  }

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  onConnect(): Observable<void> {
    return new Observable(observer => {
      this.socket.on('connect', () => {
        observer.next();
      });
    });
  }

  onDisconnect(): Observable<void> {
    return new Observable(observer => {
      this.socket.on('disconnect', () => {
        observer.next();
      });
    });
  }

  onCurrentSong(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('current_song', (data) => {
        observer.next(data);
      });
    });
  }

  onChatMessage(): Observable<{ user: string; message: string }> {
    return new Observable(observer => {
      this.socket.on('chat_message', (msg: { user: string; message: string }) => {
        observer.next(msg);
      });
    });
  }

  emit(event: string, payload?: any): void {
    this.socket.emit(event, payload);
  }

  getSocket(): Socket {
    return this.socket;
  }
}
