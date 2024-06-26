import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../modals/add-category/add-category.component';
import {Sort, MatSort} from '@angular/material/sort';
import { BudgetService } from '../../services/budgetService/budget.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'bugdeted_amount', 'remaining_amount'];
  dataSource:any;

  constructor(
    private dialog:MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private budgetService:BudgetService,
    ){}

    /**
     * Initializes functions/data on page load
     */
    ngOnInit(): void {
      this.retrieveBudget();
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

  /** 
   * Announce the change in sort state for assistive technology.
   */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /**
   * Retrieves Budget from the API
   */
  retrieveBudget(){
  }
  
}