declare var google: any;
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environment/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrected from styleUrl to styleUrls
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize Google
    google.accounts.id.initialize({
      client_id: environment.clientID,
      callback: (response: any) => {
        this.handleResponse(response);
      }
    });

    // Render the Google login button
    google.accounts.id.renderButton(
      document.getElementById("google-login"),
      {
        theme: "filled_blue",
        size: "large",
        shape: "rectangular",
        width: "100%",
      }
    );

    // Initialize Login Form Group
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;

    // Handle your login logic here
  }

  clickEvent(event: MouseEvent): void {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  private decipherToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  /**
   * Handle the response from Google 
   * @param response 
   */
  handleResponse(response: any): void {
    if (response && response.credential) {
      /* Decrypt the response */
      const payload = this.decipherToken(response.credential);

      /* Store it in session */
      sessionStorage.setItem('user', JSON.stringify(payload));

      /* Navigate to the Dashboard */
      this.router.navigate(['/dashboard']);
    }
  }
}
