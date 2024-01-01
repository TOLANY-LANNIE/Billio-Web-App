import { Component, signal, Input, computed } from '@angular/core';
import { GreetingService } from '../../services/greetingService/greeting-service.service';

export type MenuItem ={
  icon:string;
  label:string;
  route?: string;

}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  dynamicGreeting: string;
  currentHour = new Date;
  
  constructor(
    private greetingService:GreetingService
  ){
    this.dynamicGreeting = this.greetingService.getDynamicGreeting( this.currentHour);
  }
 /**
 * The following code defines a component class with properties and methods related to a collapsible sidenav.
 * It uses MobX signals to manage the state of the sidenavCollapsed property.
 */

  // Create a signal for managing the sidenav collapsed state
  sidenavCollapsed = signal(false)


  /**
  * Input property decorator to handle changes in the 'collapsed' input property.
  * When the 'collapsed' input changes, it updates the 'sidenavCollapsed' signal.
  * @param val - The new value of the 'collapsed' property.
  */
  @Input () set collapsed(val:boolean){
    this.sidenavCollapsed.set(val);
  };

  /**
  * A signal representing an array of menu items.
  * Each menu item has properties such as icon, label, and route.
  * Used to define the menu structure for the component.
  */
  menuItems = signal<MenuItem[]>([
    {
      icon:'dashboard',
      label:'Dashboard',
      route:'dashboard'
    },
    {
      icon:'category',
      label:'Categories',
      route:'categories'
    },
    {
      icon:'monetization_on',
      label:'Bills',
      route:'bills'
    },
    {
      icon:'calendar_view_day',
      label:'Calendar',
      route:'calendar'
    },
    {
      icon:'payment',
      label:'Transactions',
      route:'transactions'
    },
    {
      icon:'bar_chart',
      label:'Reports',
      route:'reports'
    },
  ]);

  profilePicSize = computed(()=>this.sidenavCollapsed()?'32':'100')
}
