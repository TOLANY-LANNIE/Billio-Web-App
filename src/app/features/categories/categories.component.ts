import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../modals/add-category/add-category.component';
import {Sort, MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'bugdeted_amount', 'remaining_amount'];
  dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);

  constructor(private dialog:MatDialog, private _liveAnnouncer: LiveAnnouncer){

  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  /**
   * This method is called after the component's view has been initialized.
   * It is used to set the paginator for the dataSource, enabling pagination functionality.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filters the content on the table based on the searchbox input
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Opens the Add Category Dialog
   */
  openCategoryDialog(){
    this.dialog.open(AddCategoryComponent,{
      data : {},
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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
