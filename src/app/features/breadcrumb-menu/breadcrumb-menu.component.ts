import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html',
  styleUrl: './breadcrumb-menu.component.scss'
})
export class BreadcrumbMenuComponent implements OnInit {

  breadcrumbStack: { key: string; value: string }[] = []; // Initialize an empty stack
  routeList:any[];
  constructor(private _breadcrumbService: BreadcrumbService,private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // The route has changed
        const url = new URL(window.location.href);
        const currentRoute = decodeURIComponent(url.pathname);
        this.routeList = this._breadcrumbService.findNodeWithParents(currentRoute)!;
      }
    });
  }


  // Function to add a page to the breadcrumb stack
  addToBreadcrumbStack(key: string, value: string) {
      // Check if the page already exists in the stack
      const existingIndex = this.breadcrumbStack.findIndex(item => item.key === key);

      if (existingIndex !== -1) {
          // Remove items above the existing page
          this.breadcrumbStack = this.breadcrumbStack.slice(0, existingIndex);
      } else {
          // Add the new page
          this.breadcrumbStack.push({ key, value });
      }
  }

  ngOnInit(): void {
    const url = new URL(window.location.href);
    const currentRoute = decodeURIComponent(url.pathname);
    this.routeList = this._breadcrumbService.findNodeWithParents(currentRoute)!;
  }



  // Function to remove the top item from the breadcrumb stack
  removeFromBreadcrumbStack() {
      if (this.breadcrumbStack.length > 0) {
          this.breadcrumbStack.pop();
      }
  }

  // Function to get the current page (top of the stack)
  getCurrentPage(): { key: string; value: string } | undefined {
      return this.breadcrumbStack[this.breadcrumbStack.length - 1];
  }

  // Example usage:
  navigateToPage(pageKey: string, pageTitle: string) {
      this.addToBreadcrumbStack(pageKey, pageTitle);
      // Other navigation logic (e.g., route changes)
  }
}

