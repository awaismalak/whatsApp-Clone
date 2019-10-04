import { Component, OnInit } from '@angular/core';
import {faPaperclip } from '@fortawesome/free-solid-svg-icons';
import {faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import {faSmile } from '@fortawesome/free-solid-svg-icons';
import {faMicrophone } from '@fortawesome/free-solid-svg-icons';

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
  
  constructor() { }

  ngOnInit() {
  }

}
