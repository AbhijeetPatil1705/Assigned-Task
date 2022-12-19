import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  tableReactiveForm:any;
  selectedDataById:any;
  currentId:any;
  reactiveForm = this.fb.group({
    firstName:["",[Validators.required]],
    lastName:["",[Validators.required]],
    email:["",[Validators.required]]
  })
  constructor(private fb:FormBuilder,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getReactiveForm().subscribe(res=>{
      this.tableReactiveForm =res;
    })
  }

  saveReactiveForm(val:any){
   this.productService.saveReactiveForm(val).subscribe(res=>{
    // console.log("resss",res);
   })
  }

  deleteFormData(id:any){
    this.productService.deleteReactiveData(id).subscribe(res=>{
     console.log("id",res);
    })
  }

  editFormData(id:any){
    this.currentId= id;
  this.selectedDataById =this.tableReactiveForm.find((ele:any)=>{
    return ele.id ==id;
  })
  this.reactiveForm.setValue({
    firstName:this.selectedDataById.firstName,
    lastName:this.selectedDataById.lastName,
    email:this.selectedDataById.email
  })
  }

  updateFormData(){
    this.productService.updateReactiveFormData(this.currentId,this.reactiveForm.value).subscribe(res=>{
    console.log(res);
    })
  }
}
