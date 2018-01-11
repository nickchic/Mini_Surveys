import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Option } from '../option';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-single-survey',
  templateUrl: './single-survey.component.html',
  styleUrls: ['./single-survey.component.css']
})
export class SingleSurveyComponent implements OnInit {

  survey: Survey = new Survey();
  results: Option[] = [];
  voted: boolean;
  currentVote: number;

  constructor(private router: Router, private route: ActivatedRoute, private _surveyService: SurveyService, private _userService: UserService) { }

  ngOnInit() {
    console.log('on init')
    this.route.paramMap.switchMap(
      params => this._surveyService.getByID(params.get('id'))
    )
    .subscribe(
      survey => {
        this.survey = survey
        this.fillResults();
        console.log('survey!!', survey)
      },
      errorResponse => console.log(errorResponse)
    );


  }

  fillResults():void {
      this.results = this.survey.options.sort(
          (a: Option, b: Option) => {
              if(a.votes > b.votes) {
                  return -1;
              } else {
                  return 1;
              }
          })
  }

  vote(){
    this.survey.options[this.currentVote].votes++;
    this._surveyService.editSurvey(this.survey).
      subscribe(
        survey => {
            console.log('survey!!', survey)
            this.voted = true;
        },
        error => console.log(error)
      )
  }

  changeVote(idx: number){
      if(!this.voted){ this.currentVote = idx; }
  }

}
