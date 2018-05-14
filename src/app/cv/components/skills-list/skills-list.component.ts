import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: [ './skills-list.component.scss' ]
})
export class SkillsListComponent implements OnInit {
  @Input() skills: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
