import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { WebsocketService } from 'src/app/websocket.service';


@Component({
  selector: 'app-listar-chat',
  templateUrl: './listar-chat.component.html',
  styleUrls: ['./listar-chat.component.scss']
})
export class ListarChatComponent implements OnInit {

  constructor(private service: ChatService, private servicio: WebsocketService) { }

  fecha = new Date();

  /*  contact = {
     name: "Chat Grupo",
     photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Grupo',
     lastMessage: 'lorem ipsum',
     lastdate: new Date(),
     messageslist: ['']
   }; */

  lista = [
    {
      name: 'Grupo',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Grupo',
      lastdate: new Date(),
      messageslist: ['']
    },
    {
      name: 'Erick',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Erick',
      lastMessage: 'lorem ipsum',
      lastdate: new Date(),
      messageslist: ['']
    },
    {
      name: 'Grimaldo',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Grimaldo',
      lastMessage: 'lorem ipsum',
      lastdate: new Date(2021, 4, 2),
      messageslist: ['']
    },
    {
      name: 'Jonathan',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Jonathan',
      lastMessage: 'lorem ipsum',
      lastdate: new Date(),
      messageslist: ['']
    },
    {
      name: 'Michael',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Michael',
      lastMessage: 'lorem ipsum',
      lastdate: new Date(2020, 1, 1),
      messageslist: ['']
    },
    {
      name: 'Cristian',
      photo: 'https://ui-avatars.com/api/?background=random&size=200&bold=true&uppercase=true&name=Cristian',
      lastMessage: 'lorem ipsum',
      lastdate: new Date(2020, 9, 2),
      messageslist: ['']
    },
  ];
  messageslist: string[] = [];
  /*   chekToday(lastDate: Date): boolean {
      return (
        this.fecha.getDate() === lastDate.getDate() &&
        this.fecha.getMonth() === lastDate.getMonth() &&
        this.fecha.getFullYear() === lastDate.getFullYear())
    }
    chekYesterday(lastDate: Date): boolean {
      return (
        this.fecha.getDate() - 1 === lastDate.getDate() &&
        this.fecha.getMonth() === lastDate.getMonth() &&
        this.fecha.getFullYear() === lastDate.getFullYear())
    }
    Other(lastDate: Date): boolean {
      return (
        this.fecha.getDate() !== lastDate.getDate() && this.fecha.getMonth() !== lastDate.getMonth() && this.fecha.getFullYear() >= lastDate.getFullYear())
    } */

  namecontac = "";

  showChats(contact: any): void {
    /* console.log(contact); */
    this.service.showContact.emit(contact);
  }

  ngOnInit(): void {

    this.servicio.onNewMessage().subscribe(msj => {

    })

    this.service.showContact.subscribe(val3 => {
      this.namecontac = val3.name;
      /* console.log(this.namecontac); */
    })
    this.lista.forEach(val => {
      this.service.message.subscribe(val2 => {
        /* console.log(this.namecontac + "este"); */
        if (this.namecontac == val.name) {
          this.service.messagelist.emit(val.messageslist);
          val.messageslist.push(val2.message);
          val.name = val2.name;
          /* console.log(val2); */
        }
      })
    })
  }
}

