import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatSessionComponent } from './chat-session/chat-session.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FormsModule } from '@angular/forms';
import { VideoCamComponent } from './video-cam/video-cam.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatSessionComponent,
    ChatMessageComponent,
    VideoCamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
