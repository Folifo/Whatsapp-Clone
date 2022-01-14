import { Component, Input, OnInit } from '@angular/core';
import { Emoji } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { Conversation } from '../models/conversation';
import { ConversationsService } from '../services/conversations.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() conversation!:Conversation;
  message='';
  constructor(private convService: ConversationsService) { }
  emojiVisible:boolean=false;
  ngOnInit(): void {
  }

  
  submitMessage(event:any){
    this.convService.submitMessage(event,this.conversation); 
    this.message=''; 
    this.emojiVisible=false;
  }   

  addEmoji(event:any){
  this.message += event.emoji.native
  }

}
