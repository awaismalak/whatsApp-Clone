import { Component, OnInit } from '@angular/core';
import {faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import {faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import {faSearch } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit() {
  }

}
