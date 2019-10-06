import { Component, OnInit } from '@angular/core';
import {faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  faTimes=faTimes;
  constructor() { }

  ngOnInit() {
  }

}
