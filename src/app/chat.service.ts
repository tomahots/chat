import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  @Output() showContact = new EventEmitter();
  @Output() message = new EventEmitter();
  @Output() name = new EventEmitter();
  @Output() messagelist = new EventEmitter();

  constructor() { }
}
