import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import {faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-searchsms',
  templateUrl: './searchsms.component.html',
  styleUrls: ['./searchsms.component.scss']
})
export class SearchsmsComponent implements OnInit {
  faSearch=faSearch;
  faTimes=faTimes;
  isVisiblesearchcomponent = true;

  @Output('onClose') onClose: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  closeSearchComponent()
  {
    this.onClose.emit(this.isVisiblesearchcomponent);
  }
}
