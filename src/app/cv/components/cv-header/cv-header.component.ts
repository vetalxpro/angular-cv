import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: [ './cv-header.component.scss' ]
})
export class CvHeaderComponent implements OnInit {
  @Input() cv: Cv;

  constructor() {
  }

  ngOnInit() {
  }

  get fullname(): string {
    return this.cv ? `${this.cv.basics.firstName} ${this.cv.basics.lastName}` : '';
  }

}
