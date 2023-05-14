import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface ChatMessage {
  is_user: boolean;
  message: string;
}

@Component({
  selector: 'app-chat-session',
  templateUrl: './chat-session.component.html',
  styleUrls: ['./chat-session.component.scss']
})
export class ChatSessionComponent implements OnInit {
  botName = 'Scott B';
  messages: ChatMessage[] = [];
  userInput = '';
  @ViewChild('messageList', { static: false }) messageList!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  handleUserChat(event: any): void {
    this.userInput = event.target.value;
  }

  scrollToBottom(): void {
    setTimeout(() => {
      if (this.messageList) {
        this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
      }
    }, 100);
  }

  
  async handleSendMessage(): Promise<void> {
    const newMessage: ChatMessage = { is_user: true, message: this.userInput };
    this.messages.push(newMessage);
    this.scrollToBottom();
  
    // Define the endpoint and query string parameters
    const endpoint = 'https://us-central1-gptlab-api.cloudfunctions.net/app';
    const botName = 'bob';
    const sessionId = 1234;
    const prompt = this.userInput;
    this.userInput = '';
    const apiUrl = `${endpoint}/conversation?sessionId=${sessionId}&botName=${botName}&prompt=${prompt}`;
  
    try {
      // Fetch the bot response from the API
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = await response.text();
      const botResponse = responseData;
  
      const botMessage: ChatMessage = {
        is_user: false,
        message: botResponse,
      };
      this.messages.push(botMessage);
      this.scrollToBottom(); 
    } catch (error) {
      console.error(error);
    }
  }
  

  handleStartNewSession(): void {
    this.messages = [];
  }

  handleSessionEnd(): void {
    this.messages = [];
    this.userInput = '';

    const newMessage: ChatMessage = {
      is_user: false,
      message: `${this.botName} has ended the session.`,
    };
    this.messages.push(newMessage);
  }
}
