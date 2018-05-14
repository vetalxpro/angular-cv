import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../models/work';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: [ './works-list.component.scss' ]
})
export class WorksListComponent implements OnInit {
  @Input() works: Work[];
  dateFormat = 'MMMM yyyy';

  constructor() {
  }

  ngOnInit() {
  }

}
