import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../models/conversation';
import { ConversationsService } from '../services/conversations.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() conversation!:Conversation;
  constructor(private conv: ConversationsService) { }

  ngOnInit(): void {
  }
  submitMessage(event:any){
    alert(event.target.value)
  }

}
