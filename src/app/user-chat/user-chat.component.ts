import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../shared/services/contacts.service';
import { Contact, Message } from '../shared/services/contacts';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
index;
contact:Contact;
  constructor(
    private route: ActivatedRoute,
    private contactsService :ContactsService
  ) {
    this.route.params.subscribe((params)=>{
      this.index = params.id;
      this.contact = this.contactsService.contactsList[this.index];

    })


   }

  ngOnInit() {
  }

  shouldShowTriangle(message: Message, index: number){

    if(index==0){
      return true;
    }

    let perviousMessage: Message = this.contact.conversation[index-1];
    

    if(message.received){

       
      if(!perviousMessage.received)
      {
        return true;
      }
      

    } else if(message.sent){
      if(!perviousMessage.sent)
      {
        return true;
      }
    }


    return false;
  }

}
