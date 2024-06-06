import { Component, signal, computed, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth = inject(AuthService);
  userName: string;
  userProfile: string;
  collapsed = signal(false);
  showHeaderAndSideMenu: boolean = true;
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  constructor(
    private router: Router,
  ) {
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

  checkInviteUrl() {
    return window.location.href.indexOf('login') > -1;
  }

  /**
   * Sign out function
   */
  signOut() {
    sessionStorage.removeItem('user');
    this.auth.signOut();
  }
}
