import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Survey } from './survey';
import { BehaviorSubject, Observable } from 'Rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class SurveyService {

  constructor(private _http: Http) { }

  getAll(): Observable<Survey[]>{
    return this._http.get('/api/survey')
      .map((response) => {
          console.log('Reg Response', response);
          return response.json();
      })
      .catch((error) => {
        return Observable.throw(error)
      })
  }

  getByID(id: string): Observable<Survey>{
    return this._http.get(`/api/survey/${ id }`)
        .map((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log('stored user error', error);
            return Observable.throw(error);
        })
  }

  createSurvey(survey: Survey): Observable<Survey>{
    return this._http.post('/api/survey', survey)
      .map((response) => {
          return response.json();
      })
      .catch((error) => {
          console.log('stored user error', error);
          return Observable.throw(error);
      })
  }

  deleteSurvey(id: string): Observable<Survey>{
    return this._http.delete(`/api/survey/${ id }`)
        .map((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log('stored user error', error);
            return Observable.throw(error);
        })
  }

  editSurvey(survey: Survey): Observable<Survey>{
    return this._http.put(`/api/survey/${ survey._id }`, survey)
        .map((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log('stored user error', error);
            return Observable.throw(error);
        })
  }

}
