import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankingComponent } from './banking/banking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'dash',component:DashboardComponent,canActivate:[AuthGuard],
children : [
  {path:'students',component:StudentsComponent},
  {path:'products',component:ProductsComponent},
  {path:'banking',component:BankingComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
