import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User = new User();
    error: string = null;

    constructor(private _userService: UserService) { }

    ngOnInit() {
        if(this._userService.logged_in() && !this._userService.logged_in_user){
            this._userService.getUserStored()
                .subscribe(
                    user => {
                        this.user = user;
                    },
                    errorResponse => this.error = errorResponse.json()
                );
        }
    }


    login_attempt(event: Event){
        event.preventDefault();
        console.log('login attempt')
        this._userService.login(this.user)
            .subscribe(
                user => {
                    console.log('cool beans')
                    this._userService.login_success(user);
                    this.user = new User();
                },
                errorResponse => this.error = errorResponse.json()
            );
    }

    logout(event: Event){
        event.preventDefault();
        console.log('log out')
        this._userService.logout()
        .subscribe(
            response => console.log(response),
            errorResponse => console.log(errorResponse.json())
        );
    }

}
