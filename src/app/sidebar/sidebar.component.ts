import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Conversation } from '../models/conversation';
import { ConversationsService } from '../services/conversations.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private conv: ConversationsService) { }
  
  conversations !: Conversation[];
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  this.conversations = this.conv.getAllConversations();
  }
   
}
