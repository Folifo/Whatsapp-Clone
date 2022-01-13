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
      {id:1, name:"James" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
          messages:[{
            id:1, body:"hello World James", time:"9:12 PM", me:true
          },
          {id:2, body:"How are you?", time:"9:12 PM", me:false},
          {id:3, body:"I am fine", time:"9:12 PM", me:true},
          {id:4, body:"Glad to hear that!", time:"9:12 PM", me:false}
  
          ]},
      {id:2, name:"David" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : true,
      messages:[{
        id:1, body:"hello World David", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:3, name:"Kelly" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:4, name:"Robert" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : true,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:5, name:"Thomson" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : true,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:6, name:"Garry" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
      messages:[{
        id:1, body:"hello World", time:"9:12 PM", me:true
      },
      {id:2, body:"How are you?", time:"9:12 PM", me:false},
      {id:3, body:"I am fine", time:"9:12 PM", me:true},
      {id:4, body:"Glad to hear that!", time:"9:12 PM", me:true}
  
      ]},
      {id:7, name:"Donald" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false,
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

}
