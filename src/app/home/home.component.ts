import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/dataType';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.reFresh();
  }

  login(val: Login) {
    // console.log(val);
    if (val.name==="admin" && val.password==="admin") {
      // let val={"name":"admin","password":"admin"};
      localStorage.setItem("user", JSON.stringify(val));
      this.router.navigate(['dash']);
    } else {
      alert("Please enter correct username or password");
    }
  }
}
