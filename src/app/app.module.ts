import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { Http, Headers,HttpModule, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

 

import { AppComponent }  from './app.component';
import { LoginComponent} from './login/login.component';
import { QuizComponent} from './quiz/quiz.component';
import { NavbarComponent} from './navbar/navbar.component';
import { SignupComponent} from './signup/signup.component';
import { ResultComponent} from './result/result.component';
import { AppRoutingModule} from './app-routing.module';
import {LoginService} from './login/login.service';
import {QuizService} from './quiz/quiz.service';
import {SidebarComponent } from './question_sidebar/quessidebar.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ,AppRoutingModule,HttpModule,ReactiveFormsModule],
  declarations: [ AppComponent,LoginComponent,SignupComponent,QuizComponent,NavbarComponent,SidebarComponent,ResultComponent ],
  bootstrap:    [ AppComponent ],
  providers:[LoginService,QuizService]
})
export class AppModule { }
