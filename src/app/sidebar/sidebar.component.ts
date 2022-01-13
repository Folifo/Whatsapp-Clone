import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  conversations=[
    {name:"James" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false},
    {name:"David" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : true},
    {name:"Kelly" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false},
    {name:"Robert" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : true},
    {name:"Thomson" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : true},
    {name:"Garry" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false},
    {name:"Donald" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false},
    {name:"Edinson" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false},
    {name:"Daniel" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false},
    {name:"Bruce" , time:"8:34 AM", latestMessage: "Good morning !!!", latestMessageRead : false}
  ];
  ngOnInit(): void {
  }

}
