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
    console.log('on init')
    this.route.paramMap.switchMap(
      params => this._surveyService.getByID(params.get('id'))
    )
    .subscribe(
      survey => {
        this.survey = survey
        console.log('survey!!', survey)
      },
      errorResponse => console.log(errorResponse)
    );
  }

  vote(idx: number, survey: Survey){
    survey.options[idx].votes++;
    this._surveyService.editSurvey(survey).
      subscribe(
        survey => console.log('survey!!', survey),
        error => console.log(error)
      )
  }

}
