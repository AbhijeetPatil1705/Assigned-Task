import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankingComponent } from './banking/banking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentsComponent } from './students/students.component';
import { TdfFormComponent } from './tdf-form/tdf-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'dash',component:DashboardComponent,canActivate:[AuthGuard],
children : [
  {path:'students',component:StudentsComponent},
  {path:'products',component:ProductsComponent},
  {path:'banking',component:BankingComponent},
  {path:'form',component:TdfFormComponent},
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'reactive',component:ReactiveFormComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
