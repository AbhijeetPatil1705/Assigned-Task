
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
headDetails = ["Month","Credit","Debit","Balance"];
showBtn=false;
 lastThreeMonths=[
  {value:"Jan",viewValue:"Jan"},
  {value:"Feb",viewValue:"Feb"},
  {value:"Mar",viewValue:"Mar"},
  {value:"April",viewValue:"April"},
  {value:"May",viewValue:"May"},
  {value:"June",viewValue:"June"}
];

bankForm = this.fb.group({
  oAmountDetails:this.fb.array([this.createMonthDetails()])
})
  bankingDetails: any;
  lastThreeMonthsNewArr: any=[];
  duplicateMonth: any =[];

  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.createMonthDetails()
    this.bankingDetails = this.bankForm.get('oAmountDetails') as FormArray;
    this.bankingDetails.push(this.createMonthDetails());
    this.bankingDetails.push(this.createMonthDetails());
    this.userService.subjectBtnEnabled.subscribe(res=>{
      console.log(res);
      this.showBtn = res;
    })
  }
  
  createMonthDetails(){
    return this.fb.group({
      sAmountInLastThreeMonths:["",[Validators.required]],
      sCreditedAmt: ["",[Validators.required]],
      sDebitedAmt: ["",[Validators.required]],
      sBalanceAmt: ["",[Validators.required]]
    })
  };

  bankFormSubmit(val:any){

let selectedValue1 = this.bankForm.controls.oAmountDetails.value[0].sAmountInLastThreeMonths;
let selectedValue2 = this.bankForm.controls.oAmountDetails.value[1].sAmountInLastThreeMonths;
let selectedValue3 = this.bankForm.controls.oAmountDetails.value[2].sAmountInLastThreeMonths;
if(selectedValue1 && selectedValue2 && selectedValue3){
  selectedValue1 = this.bankForm.controls.oAmountDetails.value[0].sAmountInLastThreeMonths;
selectedValue2 = this.bankForm.controls.oAmountDetails.value[1].sAmountInLastThreeMonths;
selectedValue3 = this.bankForm.controls.oAmountDetails.value[2].sAmountInLastThreeMonths;
this.lastThreeMonthsNewArr = [selectedValue1,selectedValue2,selectedValue3];
// this.duplicateMonth = this.lastThreeMonthsNewArr.filter((e,i,a)=>a.indexOf(e) !==i);
}
if((selectedValue1 == selectedValue2) || (selectedValue2 == selectedValue3) || (selectedValue1 == selectedValue3)){
  // alert(this.duplicateMonth + " " + "Duplicate Month Please select correct Month details");
  alert("Please select correct Month details")
}else {
  console.log(val);
}
if(this.bankForm.status.includes("INVALID")){
  return;
}
  }
  
  onMonthSelect(ele:any){
    this.lastThreeMonthsNewArr = [];
    let selectedValue1 = this.bankForm.controls.oAmountDetails.value[0].sAmountInLastThreeMonths;
    let selectedValue2 = this.bankForm.controls.oAmountDetails.value[1].sAmountInLastThreeMonths;
    let selectedValue3 = this.bankForm.controls.oAmountDetails.value[2].sAmountInLastThreeMonths;
    if(selectedValue1 && selectedValue2 && selectedValue3){
      selectedValue1 = this.bankForm.controls.oAmountDetails.value[0].sAmountInLastThreeMonths;
    selectedValue2 = this.bankForm.controls.oAmountDetails.value[1].sAmountInLastThreeMonths;
    selectedValue3 = this.bankForm.controls.oAmountDetails.value[2].sAmountInLastThreeMonths;
    this.lastThreeMonthsNewArr = [selectedValue1,selectedValue2,selectedValue3];
    // this.duplicateMonth = this.lastThreeMonthsNewArr.filter((e,i,a)=>a.indexOf(e) !==i);
    }
    if((selectedValue1 == selectedValue2) || (selectedValue2 == selectedValue3) || (selectedValue1 == selectedValue3)){
      alert(this.lastThreeMonths + " " + "Duplicate Month Please select correct Month details");
    }

  }
}

