import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz/quiz.service';

@Component({
    selector: 'my-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css'],
})

export class ResultComponent {

    marks:any;
    marksObt:number;
    total_ques:number;
    pass:number=0.6;
    result:string;
    
    constructor(route: ActivatedRoute,quizservice:QuizService) {
        this.marks=quizservice.getMarks();
        this.marksObt=this.marks.obtMarks;
        this.total_ques=this.marks.totalQues;
    }
    ngOnInit(){
        if(this.marksObt/this.total_ques>=0.5){
            this.result="Passed"
            console.log("pass")
        }
        else{
            this.result="failed";
            console.log("failed");
        }
        
    }
}



