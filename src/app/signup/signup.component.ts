import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
    username:String;
    SignupFun() {

        console.log(this.username);

    }
}


