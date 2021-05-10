import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  handler = new WebSocket('wss://webskocet.herokuapp.com');
  //Emitter
  sendMessage(msg: string): void {
    this.handler.send(msg);
  }
  // HANDLER
  onNewMessage(): Observable<any> {
    return new Observable(observer => {
      this.handler.onmessage = (msg => {
        observer.next(msg);
      })
    }

    )
  }
}
