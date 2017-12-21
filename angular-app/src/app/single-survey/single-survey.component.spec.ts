import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSurveyComponent } from './single-survey.component';

describe('SingleSurveyComponent', () => {
  let component: SingleSurveyComponent;
  let fixture: ComponentFixture<SingleSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
