import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  constructor(private servicio: WebsocketService) { }
  text = 'Hola mundo';

  saludar(): void {
    console.log('hola mundo');
  }

}
