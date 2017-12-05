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
    private _total:number =0;

    items:Array<{name:string,count:number,color:string}>=[
        {name:'Orange',count:0,color:'#2bc65a'},
        {name:'Apple',count:this.total_ques-this.marksObt,color:'red'},
        {name:'Pear',count:0,color:'green'}
      ];
   
    
    
    constructor(route: ActivatedRoute,quizservice:QuizService) {
        this.marks=quizservice.getMarks();
        this.marksObt=this.marks.obtMarks;
        this.total_ques=this.marks.totalQues;

        if(this.items.length>0)
            {

              this.items[0].count=this.marksObt;
              this.items[1].count=this.total_ques-this.marksObt;
              this._total = this.items.map(a=>a.count).reduce((x,y)=>x+y);
            }
    }
    ngOnInit(){
        if(this.marksObt/this.total_ques>=0.5){
            this.result="Passed"
        }
        else{
            this.result="failed";
        }
        
    }
      getPerimeter(radius:number):number
      {
        return Math.PI*2*radius;
      }
    
      getColor(index:number):string
      {
        return this.items[index].color;
      }
    
      getOffset(radius:number,index:number):number
      {   
        var percent=0;
        for(var i=0;i<index;i++)
        {
          percent+=((this.items[i].count)/this._total);
        }
        var perimeter = Math.PI*2*radius;
        return perimeter*percent;
      }
}



