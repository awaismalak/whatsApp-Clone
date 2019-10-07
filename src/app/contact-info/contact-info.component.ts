import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faTimes } from '@fortawesome/free-solid-svg-icons';
import { ContactsService } from '../shared/services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  isVisiblesearchcomponent =true;
  contactInfo =[];
  index;
  @Output('onClose') onClose  = new EventEmitter();
  faTimes=faTimes;
  constructor(
    private contactService: ContactsService,
    private route: ActivatedRoute,
  ) { 
  this.contactInfo =  this.contactService.contactsList;
 this.route.params.subscribe((params)=>{
   this.index =params.id;
 })


  }
  


  ngOnInit() {
  }




}
