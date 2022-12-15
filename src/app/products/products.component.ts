import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productResponse:any="";
  selectProductValue='';
  selectedProductList:any="";
  windowSize:any="";
  isMobile:boolean=false;
  ngZone: any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.windowSize = window.innerWidth;
    // window.onresize = (e)=>{
    //   this.ngZone.runOutsideAngular(()=>{
    //     window.innerWidth < 768 ?(this.isMobile=true):(this.isMobile=false)
    //   })
    // }
    // if(this.windowSize < 786){
    // this.isMobile = true;
    // }else {
    //   this.isMobile=false;
    // }
    this.productService.productData().subscribe((res:any)=>{
      if(res!==undefined && res!=null){
        this.productResponse = res.products;
        // this.productResponse = res.json;
        // this.productResponse= Array.of(this.productResponse);
        console.log("welcome",this.productResponse);
      }
      this.allProduct();
    })
  }
  selectedProducts(products:any){
 console.log("you have selected", this.selectProductValue, products );
 this.allProduct();
 this.selectedProductList = this.productResponse.filter((element:any)=>element.title === products)  
 console.log(this.selectedProductList);
  }

  allProduct(){
    this.selectedProductList = this.productResponse;
  }
  
}
