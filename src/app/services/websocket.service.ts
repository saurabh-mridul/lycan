import { Injectable } from '@angular/core';
import * as SocketIO from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socketUrl = "http://localhost:10001";
  private socketIO: SocketIOClient.Socket;

  private statusSubject$: BehaviorSubject<string> = new BehaviorSubject('undefined');
  private operationResponse$: BehaviorSubject<string> = new BehaviorSubject('undefined');

  constructor() {
    this.socketIO = SocketIO.connect(this.socketUrl, { transports: [''] });
    this.socketIO.on('connect', () => {
      console.log(`web socket server ID ${this.socketIO.id} is connected.`);
      this.ConnectToSocketServices();
    });

    this.socketIO.on('disconnect', () => {
      console.log('web socket server disconnected.')
    });
  }

  private ConnectToSocketServices() {
    this.socketIO.on('status', (data: string) => {
      this.statusSubject$.next(data);
    });

    this.socketIO.on('operationResponse', (data: string) => {
      this.operationResponse$.next(data);
    });
  }
}
