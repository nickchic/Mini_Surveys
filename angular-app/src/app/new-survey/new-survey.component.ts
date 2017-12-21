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
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  survey: Survey = new Survey();

  constructor(private _surveyService: SurveyService, private _userService: UserService) { }

  ngOnInit() {

  }

  newSurvey(event: Event){
    event.preventDefault();
    console.log('newSurvey');
    console.log('user', this._userService.logged_in_user._id);
    this.survey.user = this._userService.logged_in_user;
    console.log('about to send', this.survey);
    this._surveyService.createSurvey(this.survey)
      .subscribe(
        survey => console.log('new survey', survey),
        error => console.log(error)
      );
    this.survey = new Survey();

  }

}
