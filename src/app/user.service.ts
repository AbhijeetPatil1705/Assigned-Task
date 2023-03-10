import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 subjectBtnEnabled = new Subject<any>();
  constructor(private router:Router,private _http:HttpClient) { }
  reFresh(){
    if(localStorage.getItem('user')){
     this.router.navigate(['dash']);
    }
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }
  btnEnabled(data:any){
    this.subjectBtnEnabled.next(data);
  }

 
}
