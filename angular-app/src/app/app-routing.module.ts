import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { SingleSurveyComponent } from './single-survey/single-survey.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: RegisterComponent
    },
    {
        path: 'new',
        pathMatch: 'full',
        component: NewSurveyComponent
    },
    {
        path: 'surveys',
        pathMatch: 'full',
        component: AllSurveysComponent
    },
    {
        path: 'surveys/:id',
        pathMatch: 'full',
        component: SingleSurveyComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
