declare var google:any;
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environment/environment.production';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl,
    password: new FormControl
  });

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: environment.clientID,
      callback: (response: any) =>{
        //console.log(response);
        this.handleResponse(response);
      }
    });

    google.accounts.id.renderButton(
      document.getElementById("google-login"),
      { theme: "filled_blue", 
        size: "large",
        shape: "rectangular",
        width: "100%",
      }
    );

  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  private descryToken(token:any){
    return JSON.parse(atob(token.split('.')[1]));

  }
  handleResponse(response: any) {
    if(response){
      /*Decrypt the response*/
      const payload = this.descryToken(response.credential);

      /*store it in session*/
      sessionStorage.setItem('user', JSON.stringify(payload));

      /* Navigate to the Dashboard */
      this.router.navigate(['/dashboard']);

    }
  }

 

}
