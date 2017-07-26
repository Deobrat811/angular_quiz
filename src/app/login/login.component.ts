import { Component, Input } from '@angular/core';
import { LoginService } from './login.service'

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[LoginService]
})

export class LoginComponent {
    msg:String;
    constructor(private serviceObj: LoginService) {
    
    }
    LoginFun() {

            this.serviceObj.getData().subscribe(msg=>this.msg=msg);\
            console.log(this.msg);
    }
}


