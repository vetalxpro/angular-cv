import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../models/language';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: [ './languages-list.component.scss' ]
})
export class LanguagesListComponent implements OnInit {
  @Input() languages: Language[];

  constructor() {
  }

  ngOnInit() {
  }

}
