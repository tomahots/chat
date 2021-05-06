import { ChatService } from 'src/app/chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.scss']
})
export class ActiveChatComponent implements OnInit {

  constructor(private service: ChatService) { }

  mensajes: string[] = [];

  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.mensajes = val.messageslist.slice();
    })
    this.service.messagelist.subscribe(val => {
      this.mensajes = val.slice();
    })

  }
}

