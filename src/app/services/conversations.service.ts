import { Injectable } from '@angular/core';
import { Conversation } from '../models/conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  conversations!:Conversation[];
  constructor(){}
  getAllConversations(){
    return this.conversations=[
      {id:1, name:"James" , time:"8:34 AM", latestMessage: "Glad to hear that!", latestMessageRead : false,
          messages:[
          {id:1, body:"hello World James", time:"9:12 PM", me:true},
          {id:2, body:"How are you?", time:"9:12 PM", me:false},
          {id:3, body:"I am fine", time:"9:12 PM", me:true},
          {id:4, body:"Glad to hear that!", time:"9:12 PM", me:false},
          {id:3, body:"I am fine", time:"9:12 PM", me:true},
          {id:4, body:"Glad to hear that!", time:"9:12 PM", me:false},
          {id:3, body:"I am fine", time:"9:12 PM", me:true},
          {id:4, body:"Glad to hear that!", time:"9:12 PM", me:false},
          {id:3, body:"I am fine", time:"9:12 PM", me:true},
          {id:4, body:"I'm back", time:"9:12 PM", me:false},
          {id:3, body:"I am fine", time:"9:12 PM", me:true},
          {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
          ]},
      {id:2, name:"David" , time:"8:34 AM", latestMessage: "See you later", latestMessageRead : true,
      messages:[{
        id:1, body:"hello World David", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:3, name:"Kelly" , time:"8:34 AM", latestMessage: "Great", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:4, name:"Robert" , time:"8:34 AM", latestMessage: "Oh beautiful", latestMessageRead : true,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:5, name:"Thomson" , time:"8:34 AM", latestMessage: "Where are you?", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:6, name:"Garry" , time:"8:34 AM", latestMessage: "You are welcome. Last night", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:7, name:"Donald" , time:"8:34 AM", latestMessage: "Thanks Bro", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:8, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:9, name:"Edinson" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:10, name:"Daniel" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:11, name:"Bruce" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]}
      ];
  }
  submitMessage(event:any,conversation:Conversation){
    let value = event.target.value.trim();
    event.target.value='';

    if(value.length<=0) return false;
    conversation.latestMessage=value;
      return conversation.messages?.unshift({
        id:2,
        body:value,
        time:'12:30',
        me:true
      });
  }

  addEmoji(event:any,conversation:Conversation){
    let value = event.emoji.native
    if(value.length<=0) return false; 
    conversation.latestMessage=value;
      return conversation.messages?.unshift({
        id:2,
        body:value,
        time:'12:30',
        me:true
      });
    }
}
