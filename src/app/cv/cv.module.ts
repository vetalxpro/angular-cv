import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './pages/cv/cv.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { CvService } from './services/cv.service';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvSectionComponent } from './components/cv-section/cv-section.component';
import { LanguagesListComponent } from './components/languages-list/languages-list.component';
import { WorksListComponent } from './components/works-list/works-list.component';
import { EducationsListComponent } from './components/educations-list/educations-list.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule,
    CvRoutingModule
  ],
  declarations: [
    CvComponent,
    SkillsListComponent,
    ContactsListComponent,
    CvHeaderComponent,
    CvSectionComponent,
    LanguagesListComponent,
    WorksListComponent,
    EducationsListComponent,
    CoursesListComponent
  ],
  providers: [ CvService ]
})
export class CvModule {
}
