import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  photo = '';
  name = '';

  constructor(private service: ChatService) { }


  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      this.name = val.name;
      this.photo = val.photo;
    });

  }

}
