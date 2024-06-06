declare var google: any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)
  constructor(private auth:Auth) { }

  /**
   * Firebase login auth fun*
   */
  login(email:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,email,password))
  }

  /* Google Sign out */
  signOut(){
    google.accounts.id.disableAutoSelect();
    this.router.navigate(['/auth/login']);
    return from(this.auth.signOut());
  }

}
