import { Injectable } from '@angular/core';
import { Contact } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactsList: Contact[] =
    [
      {
        'name': 'Muhammat atif',
        'message': 'My name is Khan',
        'lastSms': '12/31/2019',
        'image': 'one.jpg',
        conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      }, {
        'name': 'dddd asdfasf',
        'message': 'Hello world...!',
        'lastSms': '12/31/2019',
        'image': 'images.jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
      {
        'name': '3333 atif',
        'message': 'Hello world! Good morning Bro...',
        'lastSms': '12/31/2019',
        'image': 'images (1).jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
      {
        'name': '555 atif',
        'message': 'Pindi Bhattian Hafizabad',
        'lastSms': '12/31/2019',
        'image': 'images (1).jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
      {
        'name': 'Muhammat atif',
        'message': 'Pindi Bhattian Hafizabad',
        'lastSms': '12/31/2019',
        'image': 'images (1).jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
      {
        'name': 'Muhammat atif',
        'message': 'My name is Awais malik',
        'lastSms': '12/31/2019',
        'image': 'images.jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
      {
        'name': 'Muhammat atif',
        'message': 'Hello world! Good morning Bro...',
        'lastSms': '12/31/2019',
        'image': 'images (1).jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
      {
        'name': 'Muhammat atif',
        'message': 'Pindi Bhattian Hafizabad',
        'lastSms': '12/31/2019',
        'image': 'images (1).jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      }, {
        'name': 'Muhammat atif',
        'message': 'Hello world! Good morning Bro...',
        'lastSms': '12/31/2019',
        'image': 'images (1).jpeg'
        , conversation: [
          { id: 1, message: 'abc', received: true, sent: false, time: '10 minutes ago' }
        ]
      },
    ]

  constructor() { }
}
