import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: [ './contacts-list.component.scss' ]
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() {
  }

  ngOnInit() {
  }

}
