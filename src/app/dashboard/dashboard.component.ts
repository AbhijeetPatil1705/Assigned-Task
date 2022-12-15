import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
showBtn:boolean = false;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    
  }
  logout(){
    localStorage.removeItem('user');
   this.router.navigate(['home']);
  }
  Submit(){

  }
}
