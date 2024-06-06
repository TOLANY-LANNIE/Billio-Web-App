declare var google: any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)
  constructor() { }


  /* Google Sign out */
signOut(): void {
  google.accounts.id.disableAutoSelect();
  this.router.navigate(['/auth/login']);

}

}
