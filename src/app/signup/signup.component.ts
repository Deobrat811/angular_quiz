import { Component, Input } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';

@Component({
    selector: 'my-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
    username:String;
    signupForm=new FormGroup({
        username:new FormControl(),
        password:new FormControl(),
        email:new FormControl()
    });
    SignupFun() {

        //console.log(this.username);
        console.log(this.signupForm);

    }
}


