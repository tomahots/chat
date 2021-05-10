import { WebsocketService } from 'src/app/websocket.service';
import { ChatService } from 'src/app/chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.scss']
})
export class ActiveChatComponent implements OnInit {

  constructor(private service: ChatService, private servicio: WebsocketService) { }

  mensajes: string[] = [];
  name = "";
  time = "";

  ngOnInit(): void {

    this.servicio.onNewMessage().subscribe(val => {
      this.mensajes.push(JSON.parse(val.data).message);
      this.name = JSON.parse(val.data).name;
      this.time = JSON.parse(val.data).date;
      console.log(JSON.parse(val.data));
    })

    this.service.showContact.subscribe(val => {
      this.mensajes = val.messageslist.slice();
      this.name = val.name;
      this.time = val.lastdate;
    })
    this.service.messagelist.subscribe(val => {
      this.mensajes = val.slice();
    })

  }
}

