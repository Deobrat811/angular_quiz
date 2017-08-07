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
    questions: any[];   //variable to store the list of questions
    questionnum: number = 1;   //used to show the question on view
    marks: number = 0;         //used to calculate marks
    question: any;             //used to storing a single question
    quesitr: number = 0;       //used to iterate the questions
    start: boolean = true;     //used to show or hide start button
    lastques: boolean = false;   //used to store true if question is last question
    option: string;              //
    length: number;             //used to store the length of questions[] array
    index: number;
    item: any;
    constructor(private quizserObj: QuizService) {

    }
    ngOnInit() {
        this.quizserObj.getQuestion().subscribe(questions => this.questions = questions);
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
            this.marks = this.marks + 1;
        }
        this.question = this.questions[this.quesitr];

        this.questionnum = this.questionnum + 1;
    }

    //calls the suffle method and starts the quiz
    startQuiz() {
        this.suffle();
        this.question = this.questions[this.quesitr];
        this.start = false;
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


}


