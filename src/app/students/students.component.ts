import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Login } from 'src/dataType';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
// import jspdf, * as jsPDF from 'jspdf';  
import 'jspdf-autotable';
import { jsPDF } from "jspdf";
import { UserService } from '../user.service';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  data = [
    {
      rollno: 1,
      name: 'Ajay Devgan',
      address: {
        city: 'mumbai',
        pincode: '41101',
      },
      marks: '75%',
    },
    {
      rollno: 2,
      name: 'Akshay Kumar',
      address: {
        city: 'pune',
        pincode: '41131',
      },
      marks: '78%',
    },
    {
      rollno: 3,
      name: 'Vijay Chavhan',
      address: {
        city: 'pune',
        pincode: '42389',
      },
      marks: '81%',
    },
    {
      rollno: 4,
      name: 'Shahrukh Khan',
      address: {
        city: 'delhi',
        pincode: '41376',
      },
      marks: '81%',
    },
    {
      rollno: 5,
      name: 'Virat Kohli',
      address: {
        city: 'mumbai',
        pincode: '41101',
      },
      marks: '85%',
    },
  ];
  studentData: any = [];
  dropdownData : any= [];
  All:any=[];
  selectedCity ='';
  jsPDF: any;
  
  // @ViewChild('content') content:ElementRef; 
   constructor( private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.studentData)
    // this.selectCity();
    this.setStudentData()
  this.dropdownData = this.data.map((el:any) => el.address.city);
  this.dropdownData = [...new Set(this.dropdownData)];
    // this.studentData = this.data.push("all");
  }
  onCitySelect(city: any){
    if(city!=='All'){
      console.log("you have changed city..",city, ' ',this.selectedCity);
      // console.log('drop',this.dropdownData);
      // console.log('student',this.studentData);
      // console.log(this.setStudentData());
      this.setStudentData();
      this.studentData = this.data.filter((el: any) => el.address.city === city);
    }else if(city=='All'){
    console.log("new",this.data);
    this.setStudentData()
    this.studentData;
  }
}

pdfDownload(){
  const doc = new jsPDF("p", "pt", "a4");
  const source = document.getElementById("content");
  doc.setFontSize(20);
  doc.text('PDF File in angular by access zobies code',11,8);

  doc.html(source!, {
    callback: function(pdf) {
      doc.output("dataurlnewwindow"); // preview pdf file when exported
    }
  });
  this.userService.btnEnabled(true);
  // doc.output('dataurlnewwindow');
  // doc.save('table.pdf');
}

setStudentData() {
this.studentData = this.data;
this.studentData.sort((a: any, b: any) =>{
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase(); 
 if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
}
}

function html2canvas(DATA: any) {
  throw new Error('Function not implemented.');
}

