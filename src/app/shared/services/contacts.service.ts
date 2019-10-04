import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactsList=
  [
    {
      'name':'Muhammat atif', 'meassage':'Hello world','date':'12/31/2019'
    }, {
      'name':'Muhammat atif', 'meassage':'Hello world','date':'12/31/2019'
    }
  ]

  constructor() { }
}
