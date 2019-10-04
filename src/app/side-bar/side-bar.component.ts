import { Component, OnInit } from '@angular/core';
import {faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import {faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import {ContactsService} from '../shared/services/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faComment =faCommentAlt;
  faEllipsisV=faEllipsisV;
  faSearch=faSearch;
  faCircleNotch =faCircleNotch;
  contacts =[];
  constructor(
    private contactService :ContactsService,
    private route: ActivatedRoute,
    private routerService: Router) { 
    this.contacts =this.contactService.contactsList;
  }
  

 

  ngOnInit() {
    
  }

  openConversation(index){
   this.routerService.navigateByUrl('/conversation/'+ index)
}
}