export class Conversation{
    id!:number;
    name!:string;
    time!:string;
    latestMessage!:string;
    latestMessageRead!:boolean;
    messages?: message[];
}
class message {
    id!:number;
    body!:string;
    time!:string;
    me!:boolean 
}