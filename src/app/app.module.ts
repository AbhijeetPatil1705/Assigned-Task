import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FooterComponent } from './footer/footer.component';
import { StudentsComponent } from './students/students.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { BankingComponent } from './banking/banking.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TdfFormComponent } from './tdf-form/tdf-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    StudentsComponent,
    ProductsComponent,
    BankingComponent,
    TdfFormComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,MatSlideToggleModule,
    MatInputModule,MatSelectModule,MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
