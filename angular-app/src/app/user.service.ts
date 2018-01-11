import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './user';
import { BehaviorSubject, Observable } from 'Rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { CookieService } from '../../node_modules/ngx-cookie';

@Injectable()
export class UserService {

    userObserver = new BehaviorSubject([]);

    emailError = new BehaviorSubject({});
    loginObserver = new BehaviorSubject({});

    logged_in_user: User = new User();

    constructor(private _http: Http, private _router: Router, private _cookieService: CookieService) { }

    register(user: User): Observable<User>{
            console.log('in reg func');
            return this._http.post('/api/users', user)
                .map((response) => {
                    console.log('Reg Response', response);
                    return response.json();
                })
                .catch((error) => {
                    if(error.json().error.code === 11000){
                        console.log('User with email already exists!');
                        this.emailError.next({error:'User with email already exists!'});
                    }
                    return Observable.throw(error);
                })
        }

        getAllUsers(){
            this._http.get('/api/users').toPromise()
                .then((users) => this.userObserver.next(users.json()))
                .catch((error) => console.log(error))
        }

        login(user: User): Observable<User>{
            console.log('sending login request');
            return this._http.post('/api/login', user)
                .map((response) => {
                    console.log('logged in! in user service', response)
                    return response.json();
                })
                .catch((error) => {
                    console.log('log in error', error);
                    return Observable.throw(error);
                })
        }

        getUserStored(): Observable<User>{
            console.log('getUserStored');
            const userID = this._cookieService.get('userID');
            console.log('id found', userID);
            return this._http.post('/api/user', { _id: userID })
                .map((response) => {
                    console.log('set user', this.logged_in_user);
                    this.logged_in_user = response.json();
                    return response.json();
                })
                .catch((error) => {
                    console.log('stored user error', error);
                    return Observable.throw(error);
                })

        }

        logout(): Observable<Boolean>{
            console.log('log out func');
            return this._http.delete('/api/logout')
                .map((response) => {
                    console.log('logout response', response)
                    this.logged_in_user = new User();
                    return response.json()
                })
                .catch((error) => {
                    console.log(error);
                    return Observable.throw(error);
                })
        }

        login_success(user: User){
            console.log('in login func');
            this.logged_in_user = user;
            this._router.navigateByUrl('/new');
        }

        logged_in(): boolean {
            const expired = parseInt(this._cookieService.get('expiration'),10);
            const userID = this._cookieService.get('userID');
            const session = this._cookieService.get('session');

            return Boolean(session && userID && expired && expired > Date.now());
        }

        showTime(){
            console.log('target', this._cookieService.get('expiration'))
            console.log('now', Date.now())
        }

}
