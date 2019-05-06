import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrWizard } from '@clr/angular';
// import * as signalR from  'signalr';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  // hubConnection: signalR.HubConnection;
  userName = '';
  groupName = '';
  loggedIn = false;
  message = '';
  messages: string[] = [];

  constructor(private route: ActivatedRoute) { }

  joinGroup() {
    this.loggedIn = true;
    console.log(`${this.userName} has logged into ${this.groupName} group.`);
  }

  sendMessage() {
    console.log(`${this.userName} sending ${this.message} from ${this.groupName} group.`);

    const data = `Sent: ${this.message}`;
    // if (this.hubConnection) {
    //   this.hubConnection.invoke('Send', data);
    // }
    this.messages.push(this.message);
    this.message = '';
  }

  ngOnInit() {
    //  catc this.hubConnection = new signalR.HubConnectionBuilder()
    //     .withUrl('http://192.168.0.101:9000/signalR')
    //     .configureLogging(signalR.LogLevel.Information)
    //     .build();

    //   this.hubConnection.on('signalR', (message) => {
    //     this.messages.push(message);
    //     console.log(message);
    //   });

    //   this.hubConnection
    //     .start()
    //     .then(() => {
    //       this.hubConnection.invoke("send", "Hello from Angular.", "1234");
    //       console.log('Connection started!')
    //     })
    //     .catch(err => console.log(`${err} Error while establishing connection :(`));
  }
}


