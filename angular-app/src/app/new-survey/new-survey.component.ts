import { Component, OnInit } from '@angular/core';
import { Option } from '../option';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { BehaviorSubject, Observer } from 'Rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  survey: Survey = new Survey();

  constructor(private _surveyService: SurveyService, private _userService: UserService, private router: Router) { }

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
        survey => {
            console.log('new survey', survey);
            this.router.navigateByUrl(`/surveys/${ survey._id }`);
        },
        error => console.log(error)
      );
    this.survey = new Survey();

  }

  addOption(event: Event):void {
      event.preventDefault();
      console.log('Add Option');
      this.survey.addOption();
  }

  deleteOption(event: Event, idx: number):void {
      event.preventDefault();
      console.log('Delete Option', idx);
      this.survey.deleteOption(idx);
  }


}
