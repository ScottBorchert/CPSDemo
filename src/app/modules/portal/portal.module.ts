import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalDashboardComponent } from './components/portal-dashboard/portal-dashboard.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatSessionComponent } from './components/chat-session/chat-session.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoCamComponent } from './components/video-cam/video-cam.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PortalDashboardComponent,
    ResumeComponent,
    ChatComponent,
    ChatSessionComponent,
    ChatMessageComponent,
    VideoCamComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    ]
})
export class PortalModule { }
