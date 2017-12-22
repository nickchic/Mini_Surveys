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
<<<<<<< HEAD
    console.log('on init')
=======

>>>>>>> 96025ad3f1296b6f46c966d637d0d534a4394431
    this.route.paramMap.switchMap(
      params => {
          console.log('getting param');
          return this._surveyService.getByID(params.get('id'))
      }
    )
    .subscribe(
      survey => {
<<<<<<< HEAD
        this.survey = survey
        console.log('survey!!', survey)
      },
      errorResponse => console.log(errorResponse)
=======
          console.log('getting survey');
          this.survey = survey;
      },
      errorResponse => console.log('error getting survey', errorResponse)
>>>>>>> 96025ad3f1296b6f46c966d637d0d534a4394431
    );
  }

  vote(idx: number){
    this.survey.options[idx].votes++;
    this._surveyService.editSurvey(this.survey).
      subscribe(
<<<<<<< HEAD
        survey => console.log('survey!!', survey),
=======
        edited_survey => {
            console.log('edit success', edited_survey);
            this.survey = edited_survey;
        },
>>>>>>> 96025ad3f1296b6f46c966d637d0d534a4394431
        error => console.log(error)
      )
  }

}
