import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
@Component({
    selector: 'my-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    providers: [QuizService]
})

export class QuizComponent {
    questions: any[];
    questionnum: number = 1;
    marks: number = 0;
    question: any;
    quesitr: number = 0;
    start: boolean = true;
    option: string;
    length: number;
    index: number;
    suffledques: any[];
    item: any;
    tick: any;
    subscription: any;
    constructor(private quizserObj: QuizService) {

    }
    ngOnInit() {
        this.quizserObj.getQuestion().subscribe(questions => this.questions = questions);
    }

     changeQuestion(quesnum:number){
         console.log("in change ques")
         console.log(quesnum);
         this.quesitr=quesnum-1;
         this.question=this.questions[this.quesitr];
         this.questionnum=this.quesitr+1;
     }

    nextQuestion() {
        this.quesitr = this.quesitr + 1;
        if (this.option == this.question.answer) {
            this.marks = this.marks + 1;
        }
        this.question = this.questions[this.quesitr];

        this.questionnum = this.questionnum + 1;
    }
    startQuiz() {
        this.suffle();
        this.question = this.questions[this.quesitr];
        this.start = false;
    }

    suffle() {
        this.length = this.questions.length;
        for (let i = this.length - 1; i >= 0; i--) {
            this.index = Math.floor(Math.random() * (i + 1));
            this.item = this.questions[this.index];
            this.questions[this.index] = this.questions[i];
            this.questions[i] = this.item;

        }
    }
    timer() {


    }


}


