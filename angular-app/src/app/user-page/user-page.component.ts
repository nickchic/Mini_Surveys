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
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

    user: User;

    constructor(private _surveyService: SurveyService, private _userService: UserService, private router: Router) { }

    ngOnInit() {
        if(!this._userService.logged_in()){
            this.router.navigateByUrl('/');
        } else {
            console.log('in there')
            this._userService.getUserStored()
                .subscribe(
                    user => {
                        this.user = user;
                    },
                    errorResponse => console.log(errorResponse.json())
                );

        }
    }

}
