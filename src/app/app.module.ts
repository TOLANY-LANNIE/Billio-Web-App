import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { BillsComponent } from './features/bills/bills.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { LoaderComponent } from './features/loader/loader.component';
import { AddBillComponent } from './modals/add-bill/add-bill.component';
import { AddCategoryComponent } from './modals/add-category/add-category.component';
import { AddTransactionComponent } from './modals/add-transaction/add-transaction.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

import { ReportsComponent } from './features/reports/reports.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './interceptors/http.interceptor';
import { CategoriesComponent } from './features/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { FlexLayoutModule} from "@angular/flex-layout";
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule} from '@angular/material/badge';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatGridListModule} from '@angular/material/grid-list';
import { FormsModule} from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { CalendarModule, MOMENT } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import   moment from 'moment';
import { environment } from '../environment/environment.development';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { ReactiveFormsModule } from '@angular/forms';
import { LoggerModule} from "ngx-logger";
@NgModule({
    declarations:[
        AppComponent,
        BillsComponent,
        CalendarComponent,
        CategoriesComponent,
        DashboardComponent,
        LoaderComponent,
        LoginComponent,
        ReportsComponent,
        SignUpComponent,
        TransactionsComponent,
        SideMenuComponent,
        AddBillComponent,
        AddCategoryComponent,
        AddTransactionComponent,
        LoginLayoutComponent,
    ],
    imports:[
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        FlexLayoutModule,
        MatMenuModule,
        MatBadgeModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatTableModule,
        MatGridListModule,
        FormsModule,
        MatPaginatorModule,
        CalendarModule,
        MatDialogModule,
        MatSortModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        LoggerModule,
        SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    ],
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalInterceptor,
            multi: true,
        },
        { provide: MOMENT, useValue: moment }
    ],
    bootstrap:[AppComponent]
    
})
export class AppModule { }