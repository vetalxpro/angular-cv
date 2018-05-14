import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
    data: {
      title: 'CV'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CvRoutingModule {
}
