import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { User } from '../user';
import { UserService } from '../user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-single-survey',
  templateUrl: './single-survey.component.html',
  styleUrls: ['./single-survey.component.css']
})
export class SingleSurveyComponent implements OnInit {

  survey: Survey = new Survey();

  constructor(private router: Router, private route: ActivatedRoute, private _surveyService: SurveyService, private _userService: UserService) { }

  ngOnInit() {

    this.route.paramMap.switchMap(
      params => {
          console.log('getting param');
          return this._surveyService.getByID(params.get('id'))
      }
    )
    .subscribe(
      survey => {
          console.log('getting survey');
          this.survey = survey;
      },
      errorResponse => console.log('error getting survey', errorResponse)
    );
  }

  vote(idx: number){
    this.survey.options[idx].votes++;
    this._surveyService.editSurvey(this.survey).
      subscribe(
        edited_survey => {
            console.log('edit success', edited_survey);
            this.survey = edited_survey;
        },
        error => console.log(error)
      )
  }

}
