import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {faUsers } from '@fortawesome/free-solid-svg-icons';
import {ContactsService} from '../shared/services/contacts.service';


@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss']
})
export class NewChatComponent implements OnInit {
  @Output('onClose') onClose = new EventEmitter();
  faSearch=faSearch;
  faArrowLeft=faArrowLeft;
  faUsers=faUsers;
  contacts=[];
  constructor(
    private contactService:ContactsService
  ) {
    this.contacts=this.contactService.contactsList;
   }

  ngOnInit() {
  }

}
