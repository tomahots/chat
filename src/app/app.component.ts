import { AfterViewInit, Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'chat';
  constructor() { }

  ngAfterViewInit(): void {

    /* fromEvent<MouseEvent>(document, 'click')
      .pipe(map((ev) => {
        return {
          x: ev.screenX,
          y: ev.screenY

        };
      }))
      .subscribe(ev => {
        console.log(ev);
      }); */

  }
}