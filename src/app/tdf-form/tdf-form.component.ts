import { identifierName } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import {faEdit } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent implements OnInit , AfterViewInit{
  model:any;
  tableData:any="";
  select:boolean =false;
  parentSelector:boolean=false;
  // id:any="";
  // isChecked:any="";
  // editIcon = faEdit;
  @ViewChild('basicForm') form:NgForm | any;
  @ViewChild('para') showValue:ElementRef | undefined ;
  currentId:any;
  name:any;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.productService.expenseDataList().subscribe(res=>{
      // console.log("res",res);
      this.tableData = res;
    }) 
   
  }
  ngAfterViewInit(): void {
    this.showValue?.nativeElement.focus()
  }
  addDetails(val:string){
    this.productService.expenseDataCreate(val).subscribe((result:any)=>{
      console.log("result",result);
    })
  }
  onChangeCheck($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    // console.log(id, isChecked);
    const selectedProducts = this.tableData.filter((ele:any) => ele.checked === isChecked).map((p:any)=>p.id ==id);
    console.log(selectedProducts);
    this.tableData.map((d:any)=>{
      if(d.id == id){
        d.select=isChecked;
        return d; 
      } 
      if(id ==-1){
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    // console.log(this.tableData);
  }

  deleteList($event: any){
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    const selectedProducts = this.tableData.filter((ele:any) => 
    ele.checked ===isChecked).map((p:any) => p.id==id);
    console.log (selectedProducts);
    this.productService.deleteProducts(id).subscribe(res=>{
      if(selectedProducts && selectedProducts.length > 0){
        this.productService.deleteProducts(selectedProducts);
      }else{
        alert("Please select atleast one checkbox for delete data list");
      }
    }) 
  }

  editData(id:any){
    this.currentId = id;
    let selectedList = this.tableData.find((ele:any)=>{return ele.id === id});
    // console.log("selectedList",selectedList);
    // console.log(this.form)
    this.form.setValue({
      expenseName:selectedList.expenseName,
      expenseAmount:selectedList.expenseAmount,
      drop:selectedList.drop
    });
     console.log(this.form)
  }

  updateDataList(){
    this.productService.updateProduct(this.currentId,this.form.value).subscribe((res)=>{
      console.log("res",res)
    });
  }

  deleteData(id:any){
// console.log(id);
this.productService.deleteProducts(id).subscribe(res=>{
  console.log("delet",res);
  this.tableData;
})
  }
}
