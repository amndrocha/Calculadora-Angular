import { Component } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-button',
  standalone: true,
  imports: [ChatComponent, FormsModule],
  templateUrl: './chat-button.component.html',
  styleUrl: './chat-button.component.css'
})
export class ChatButtonComponent {

  openChat: boolean = false;

  handleBtn() {
    this.openChat = !this.openChat;
  }

  updateOpenChat(isOpen: any) {
    this.openChat = isOpen;
  }
  

}
