import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  isVisiblesearchcomponent =true;
  @Output('onClose') onClose: EventEmitter<any> = new EventEmitter();
  faTimes=faTimes;
  constructor() { }

  ngOnInit() {
  }


  // closeContactInfoComponent()
  // {
  //   alert("this is test")
  //    this.onClose.emit(this.isVisiblesearchcomponent);
  // }


}
