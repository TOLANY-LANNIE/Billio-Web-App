import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { BillsComponent } from './features/bills/bills.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { ReportsComponent } from './features/reports/reports.component';

const routes:Routes =[
{
    path: 'auth',
    component: LoginComponent,
    children: [
        { path: 'login', component: LoginComponent },
    ]
},
{path:'bills', component:BillsComponent},
{path:'calendar', component:CalendarComponent},
{path:'categories', component:CategoriesComponent},
{path:'dashboard',component:DashboardComponent},
{path:'transactions', component:TransactionsComponent},
{path:'reports', component:ReportsComponent},
{path:'', redirectTo:'/auth/login', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }