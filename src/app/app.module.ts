import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';;
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { BillsComponent } from './features/bills/bills.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { LoaderComponent } from './features/loader/loader.component';
import { ReportsComponent } from './features/reports/reports.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './interceptors/http.interceptor';
import { CategoriesComponent } from './features/categories/categories.component';
import { ContentComponent } from './features/content/content.component';
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
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { CalendarModule, MOMENT } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import moment from 'moment';

@NgModule({
    declarations:[
        AppComponent,
        BillsComponent,
        CalendarComponent,
        CategoriesComponent,
        ContentComponent,
        DashboardComponent,
        LoaderComponent,
        LoginComponent,
        ReportsComponent,
        SignUpComponent,
        TransactionsComponent,
        SideMenuComponent
    ],
    imports:[
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