import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Transaction {
  description: string;
  date: Date;
  category:string;
  amount: number;
}

const ELEMENT_DATA: Transaction[] = [
  {description: 'Groceries at Checkers', date:new Date(2023, 0, 1, 9, 0, 0),category: 'Groceries', amount:2000},
  {description: 'Supersonic Internet Payment', date:new Date(2024, 5, 6, 9, 0, 0),category: 'Internet', amount:400},
  {description: 'FNB monthly fee', date:new Date(2023, 1, 8, 8, 0, 0),category: 'Phone Bill', amount:2000},
  {description: 'Electricity via FNB app', date:new Date(2023, 1, 6, 9, 0, 0),category: 'Electricity', amount:300},
  {description: 'Gautrain  Credit load', date:new Date(2023, 1, 6, 9, 0, 0),category: 'Transportation', amount:432},
  {description: 'Transport withdrawal', date:new Date(2023, 1, 7, 9, 0, 0),category: 'Transportation', amount:416},
  {description: 'Monthly Rental Payment', date:new Date(2023, 4, 1, 9, 0, 0),category: 'Rent', amount:2200},
  {description: 'Monthly Savings', date:new Date(2023, 1, 6, 9, 0, 0),category: 'Savings', amount:1000},
  {description: 'Groceries at Checkers', date:new Date(2023, 1, 3, 9, 0, 0),category: 'Groceries', amount:2000},
  {description: 'Supersonic Internet Payment', date:new Date(2024, 7, 1, 9, 0, 0),category: 'Internet', amount:400},
  {description: 'FNB monthly fee', date:new Date(2023, 1,3, 8, 0, 0),category: 'Phone Bill', amount:2000},
  {description: 'Electricity via FNB app', date:new Date(2023, 1, 2, 9, 0, 0),category: 'Electricity', amount:300},
  {description: 'Gautrain  Credit load', date:new Date(2023, 1, 3, 9, 0, 0),category: 'Transportation', amount:432},
  {description: 'Transport withdrawal', date:new Date(2023, 1, 4, 9, 0, 0),category: 'Transportation', amount:416},
  {description: 'Monthly Rental Payment', date:new Date(2023, 9, 1, 9, 0, 0),category: 'Rent', amount:2200},
  {description: 'Monthly Savings', date:new Date(2023, 7, 3, 9, 0, 0),category: 'Savings', amount:1000}
];
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements AfterViewInit {
  displayedColumns: string[] = ['description', 'date', 'category', 'amount'];
  dataSource =new MatTableDataSource<Transaction>( ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
