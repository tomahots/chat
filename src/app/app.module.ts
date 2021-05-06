import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListarChatComponent } from './sidebar/listar-chat/listar-chat.component';
import { ChatComponent } from './chat/chat.component';
import { NavBarComponent } from './chat/nav-bar/nav-bar.component';
import { ActiveChatComponent } from './chat/active-chat/active-chat.component';
import { ChatBarComponent } from './chat/chat-bar/chat-bar.component';
import { BarraBusquedaComponent } from './sidebar/barra-busqueda/barra-busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListarChatComponent,
    ChatComponent,
    NavBarComponent,
    ActiveChatComponent,
    ChatBarComponent,
    BarraBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
