import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsListComponent } from './educations-list.component';

describe('EducationsListComponent', () => {
  let component: EducationsListComponent;
  let fixture: ComponentFixture<EducationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
