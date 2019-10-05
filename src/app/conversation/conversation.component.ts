import { Component, OnInit } from '@angular/core';
import {faPaperclip } from '@fortawesome/free-solid-svg-icons';
import {faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import {faSmile } from '@fortawesome/free-solid-svg-icons';
import {faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../shared/services/contacts.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  attach =faPaperclip;
  nav_icon=faEllipsisV;
  search_icon=faSearch;
  smile =faSmile;
  mice =faMicrophone;
  contacts=[];
  index;
  isVisiblesearchcomponent = false;
  
  constructor(
    private route:ActivatedRoute,
    private contact: ContactsService
    ) 
    {
     

    // this.index= this.route.snapshot.params['id'];

    this.route.params.subscribe((params)=>{
      this.index = params.id;
    });

      this.contacts =this.contact.contactsList;

     }

     

  ngOnInit() {
   
  }
  isVisible(){
  let value = this.isVisiblesearchcomponent = true;
 
  }
  close() {
    let value = this.isVisiblesearchcomponent = false;
 
   }
}
