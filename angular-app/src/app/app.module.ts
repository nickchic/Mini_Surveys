import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from '../../node_modules/ngx-cookie';

import { TitleizePipe } from './titleize.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserService } from './user.service';
import { SurveyService } from './survey.service';

import { NewSurveyComponent } from './new-survey/new-survey.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleSurveyComponent } from './single-survey/single-survey.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewSurveyComponent,
    AllSurveysComponent,
    DashboardComponent,
    SingleSurveyComponent,
    NavComponent,
    HomeComponent,
    TitleizePipe,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [UserService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
