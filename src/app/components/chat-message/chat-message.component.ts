import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() isUser!: boolean;
  @Input() message!: string;
  @Input() botName!: string;
  avatarUrl!: string;

  ngOnInit(): void {
    this.avatarUrl = this.isUser
      ? 'https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=ARoN&radius=25&backgroundColor=f8d25c'
      : `https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${this.botName}&radius=25`;
  }
}
