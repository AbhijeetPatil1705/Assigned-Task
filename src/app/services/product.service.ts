import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productData(){
    return this.http.get("https://dummyjson.com/products"); 
  }
  expenseDataCreate(data:any){
    return this.http.post("http://localhost:3000/expenseData",data);
  }
  expenseDataList(){
    return this.http.get("http://localhost:3000/expenseData");
  }
  deleteProducts(id: number){
return this.http.delete(`http://localhost:3000/expenseData/${id}`);
  }
  getProduct(id:string){
    return this.http.get<any>(`http://localhost:3000/expenseData/${id}`);
   }
   updateProduct(id:string,value:string){
    return this.http.put<any>(`http://localhost:3000/expenseData/${id}`,value);
   }

   //template-driven
   saveTemplateDrivenData(data:any){
   return this.http.post("http://localhost:3000/template-drivenData",data);
   }
   getTemplateDrivenData(){
    return this.http.get("http://localhost:3000/template-drivenData");
   }
   deleteTemplateDrivenData(id:any){
    return this.http.delete(`http://localhost:3000/template-drivenData/${id}`);
   }
   editTemplateDrivenData(id:any,data:any){
    return this.http.put(`http://localhost:3000/template-drivenData/${id}`,data);
   }

   //reactive-form

   saveReactiveForm(data:any){
    return this.http.post("http://localhost:3000/reactive",data);
   }
   getReactiveForm(){
    return this.http.get("http://localhost:3000/reactive");
   }
   deleteReactiveData(id:any){
    return this.http.delete(`http://localhost:3000/reactive/${id}`);
   }
   updateReactiveFormData(id:any,data:any){
    return this.http.put(`http://localhost:3000/reactive/${id}`,data);
   }
}
