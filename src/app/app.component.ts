import { Component } from '@angular/core';
import { Conversation } from './models/conversation';
import { ConversationsService } from './services/conversations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsapp-clone';
  conversation!:Conversation;
  constructor(private conv: ConversationsService){}

  onConversationSelected(conversation:Conversation){
      this.conversation = conversation 
  }
}
