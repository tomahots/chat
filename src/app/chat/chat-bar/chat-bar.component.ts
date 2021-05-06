import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent implements OnInit {

  constructor(private service: ChatService) { }

  mensaje = new FormControl('', Validators.required);
  namecontac = '';
  msjlist: string[] = []

  send(): void {
    this.service.message.emit(this.mensaje.value);
    /* console.log(this.mensaje.value); */
    this.service.name.emit(this.namecontac);
    this.mensaje.reset();
  }
  sendEnter(ev: KeyboardEvent): void {

    if (ev.key === 'Enter') {
      this.send();
    }
  }


  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.namecontac = val.name;
    });
  }

}
