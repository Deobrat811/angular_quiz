import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuizService {

    marks: any;
    marksObt:number;
    constructor(private http: Http) {

    }
    url: string = "./app/quiz/questions.json";

    getQuestion(): Observable<any> {

        return this.http.get(this.url)
            .map((response: Response) => {
                return (<any>response.json() || []);
            });
    }

    setMarks(marks:any) {
        this.marks = marks;
    }
    getMarks() {
        return this.marks;
    }

}
