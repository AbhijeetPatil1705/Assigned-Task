import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HasElementRef } from '@angular/material/core/typings/common-behaviors/color';
import { result } from 'lodash';
import { elementAt } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
tableTemplateDriven:any;
currentId:any;
selectedListById:any;
@ViewChild('templateForm') tdForm:NgForm|any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getTemplateDrivenData().subscribe(res=>{
      console.log("result",res);
      this.tableTemplateDriven =res;
    })
  }

  templateSubmit(val:string){
    this.productService.saveTemplateDrivenData(val).subscribe(res=>{
      console.log(val);
    })
  }

  deleteData(id:any){
    this.productService.deleteTemplateDrivenData(id).subscribe(res=>{
      console.log("id",id);
      this.currentId = id;
    })
  }

  editData(id:any){
    this.currentId = id;  
    this.selectedListById = this.tableTemplateDriven.find((ele:any)=>{
       return ele.id == id;
    })
this.tdForm.setValue({
  userName:this.selectedListById.userName,
  password:this.selectedListById.password,
  email:this.selectedListById.email
})
console.log(this.tdForm)
  }

  updateData(){
    this.productService.editTemplateDrivenData(this.currentId,this.tdForm.value).subscribe(res=>{
      console.log("udate",res);
    })
  }
}
