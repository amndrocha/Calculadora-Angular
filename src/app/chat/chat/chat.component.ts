import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Input() openChat: boolean = true;
  @Output() newOpenChat = new EventEmitter();
  
  handleBtn() {
    this.openChat = !this.openChat;
    this.newOpenChat.emit(this.openChat);
  }
}
