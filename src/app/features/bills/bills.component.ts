import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.scss'
})
export class BillsComponent implements AfterViewInit {

  displayedColumns: string[] = ['description', 'due_date', 'category', 'amount', 'status'];
  dataSource = new MatTableDataSource<Bill>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * This method is called after the component's view has been initialized.
   * It is used to set the paginator for the dataSource, enabling pagination functionality.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface Bill{
  description:string;
  due_date: Date;
  category: string;
  amount: number;
  status: string;
}
const ELEMENT_DATA:Bill[] =[
  {description: 'Supersonic Internet subscription',due_date:new Date(2023, 0, 1, 9, 0, 0),category: 'Internet', amount:400, status:'Upcoming'},
  {description: ' FNB Phone subscription',due_date:new Date(2023, 0, 1, 9, 0, 0),category: 'Phone Bill', amount:10, status:'Overdue'},
  {description: ' Showmax subscription',due_date:new Date(2023, 0, 1, 9, 0, 0),category: 'TV Subscription', amount:225, status:'Paid'},
];

