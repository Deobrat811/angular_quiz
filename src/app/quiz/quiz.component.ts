import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './quiz.service';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';


export class Marks {
    obtMarks: number;
    totalQues: number;
}


@Component({
    selector: 'my-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],

})

export class QuizComponent {
    questions: any[];   //variable to store the list of questions
    questionnum: number = 1;   //used to show the question on view
    obtMarks: number = 0;         //used to calculate Obtained marks
    question: any;             //used to storing a single question
    quesitr: number = 0;       //used to iterate the questions
    start: boolean = true;     //used to show or hide start button
    lastques: boolean = false;   //used to store true if question is last question
    option: string;              //
    length: number;             //used to store the length of questions[] array
    index: number;
    item: any;

    ticks = 0;                       // variables for
    minutesDisplay: number = 0;      //timer 
    hoursDisplay: number = 0;       //calculation
    secondsDisplay: number = 0;
    sub: Subscription;

    result: boolean = false;
     marks: Marks={
          obtMarks:0,
           totalQues:0
       };

    constructor(private quizserObj: QuizService, private router: Router) {

    }
    ngOnInit() {
        this.quizserObj.getQuestion().subscribe(questions => this.questions = questions);
    }
    ngOnDestroy() {

    }
    //called by sidebar list to go to certain question
    changeQuestion(quesnum: number) {
        //checks if at the last question
        if (quesnum == this.length) {
            this.lastques = true;
        }
        else {
            this.lastques = false;
        }
        if (quesnum > this.length) {
            return;
        }
        this.quesitr = quesnum - 1;
        this.question = this.questions[this.quesitr];
        this.questionnum = this.quesitr + 1;
    }

    //iterates single question at a time
    nextQuestion() {
        //checks if at the last question
        if (this.quesitr == this.length - 2) {
            this.lastques = true;
        }
        else {
            this.lastques = false;
        }

        if (this.quesitr == this.length - 1) {
            return;
        }
        this.quesitr = this.quesitr + 1;
        if (this.option == this.question.answer) {
            this.obtMarks = this.obtMarks + 1;
        }
        this.question = this.questions[this.quesitr];

        this.questionnum = this.questionnum + 1;
    }

    //calls the suffle method and starts the quiz
    startQuiz() {
        this.suffle();
        this.length = this.questions.length;
        this.question = this.questions[this.quesitr];
        this.start = false;
        this.startTimer();
    }

    //used to suffle the question order in questions[]
    suffle() {
        this.length = this.questions.length;
        for (let i = this.length - 1; i >= 0; i--) {
            this.index = Math.floor(Math.random() * (i + 1));
            this.item = this.questions[this.index];
            this.questions[this.index] = this.questions[i];
            this.questions[i] = this.item;

        }
    }

    //code for timer
    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;

                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }



    //method to submit the answer 
    submitAnswer() {
       this.marks.obtMarks=this.obtMarks;
       this.marks.totalQues=this.length;
        this.quizserObj.setMarks(this.marks);
        this.router.navigate(['/result']);
    }


}


