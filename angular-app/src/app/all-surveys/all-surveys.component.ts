import { Component, OnInit } from '@angular/core';
import { Option } from '../option';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { BehaviorSubject, Observer } from 'Rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  all_surveys: Survey[] = [];

  constructor(private _surveyService: SurveyService, private _userService: UserService) { }

  ngOnInit() {
    this._surveyService.getAll()
      .subscribe(
        surveys => this.all_surveys = surveys,
        error => console.log(error)
      )
  }

  delete(survey: Survey){
    this._surveyService.deleteSurvey(survey._id)
      .subscribe(
        removedSurvey => {
          this.all_surveys.splice(this.all_surveys.indexOf(survey), 1);
        },
        error => console.log(error)
      )
  }



}
