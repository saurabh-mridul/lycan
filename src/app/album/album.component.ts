import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  hubConnection: HubConnection;
  userName = 'Unknown';
  message = '';
  messages: string[] = [];

  constructor(private route: ActivatedRoute) { }

  sendMessage() {
    console.log('sending message...');

    const data = `Sent: ${this.message}`;
    if (this.hubConnection) {
      this.hubConnection.invoke('Send', data);
    }
    this.messages.push(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:9000')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log(`${err} Error while establishing connection :(`));

    this.hubConnection.on('Send', (message) => {
      this.messages.push(message);
    });

  }
}


