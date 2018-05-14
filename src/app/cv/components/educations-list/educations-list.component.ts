import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../models/education';

@Component({
  selector: 'app-educations-list',
  templateUrl: './educations-list.component.html',
  styleUrls: [ './educations-list.component.scss' ]
})
export class EducationsListComponent implements OnInit {
  @Input() educations: Education[];

  constructor() {
  }

  ngOnInit() {
  }

}
