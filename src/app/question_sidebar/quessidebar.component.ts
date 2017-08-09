import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
    selector: 'my-sidebar',
    templateUrl: './quessidebar.component.html',
    styleUrls: ['./quessidebar.component.css'],
})

export class SidebarComponent {

    number: any;
    index: number;
    numbers: number[]=[];
    i: number;
    @Input() length:number;
    @Output() newques:EventEmitter<any>=new EventEmitter<any>();


    buttonClickFun(event: any) {
        this.index = parseInt(event.target.innerHTML);
        this.newques.emit(this.index);
    }
    //method to display question sidebar
    ngOnInit(){
        var i,j=0;
        console.log(this.length);
        for(i=1;i<=this.length;i=i+3){
            this.numbers[j]=i;
            j=j+1;  
        }
    }


}


