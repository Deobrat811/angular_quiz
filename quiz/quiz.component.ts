import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'my-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    providers: [QuizService]
})

export class QuizComponent {
    questions: any[];
    questionnum:number=1;
    marks:number=0;
    question: any;
    quesitr:number=0;
    start:boolean=true;
    option:string;
    constructor(private quizserObj: QuizService) {

    }
    ngOnInit() {
        this.quizserObj.getQuestion().subscribe(questions => this.questions = questions);
    }
    nextQuestion() {

         this.quesitr=this.quesitr+1;
          if(this.option==this.question.answer)
          {
             this.marks=this.marks+1;
             console.log(this.marks);
          }
         this.question=this.questions[this.quesitr];
         this.questionnum=this.questionnum+1;
    }
    startQuiz(){
        this.question=this.questions[this.quesitr];
        this.start=false;
    }



}


