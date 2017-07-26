import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
   
    constructor(private http: Http) {

    }
    url:string="http:// 192.168.1.11/";
    
    getData(): Observable<String> {
        
        return this.http.get(this.url)
            .map((response: Response) => {
                return (<String>response.json() || []);
            });
    }
         
}
