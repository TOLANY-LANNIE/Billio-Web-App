import { Component, signal, Input, computed, inject } from '@angular/core';
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
  userName: string;
  userProfile: string;
  
  constructor(
    private greetingService:GreetingService
  ){
    this.dynamicGreeting = this.greetingService.getDynamicGreeting( this.currentHour);
    const user = sessionStorage.getItem('user');
    if (user) {
      const userParsed = JSON.parse(user);
      this.userName = userParsed.name;
      this.userProfile = userParsed.picture;
    } else {
      this.userName = 'defaultUserName';  // Provide a default value or handle accordingly
      this.userProfile = 'defaultUserProfile';  // Provide a default value or handle accordingly
    }
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
      label:'Budget',
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
      icon:'bar_chart',
      label:'Reports',
      route:'reports'
    },
    {
      icon:'payment',
      label:'Transactions',
      route:'transactions'
    },
  ]);

  profilePicSize = computed(()=>this.sidenavCollapsed()?'32':'100')

  capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
}
