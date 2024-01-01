import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'bugdeted_amount', 'remaining_amount'];
  dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Category{
  name:string;
  budgeted_amount: number;
  remaining_amount: number;
}

const ELEMENT_DATA:Category[] =[
{name:'Transportation', budgeted_amount:1000,remaining_amount:1000},
{name:'Electricity', budgeted_amount:400,remaining_amount:400},
{name:'Internet Bill', budgeted_amount:400,remaining_amount:400},
{name:'Groceries', budgeted_amount:1700,remaining_amount:1700},
{name:'Savings', budgeted_amount:1000,remaining_amount:1000},
{name:'Entertainment', budgeted_amount:1000,remaining_amount:1000},

];
