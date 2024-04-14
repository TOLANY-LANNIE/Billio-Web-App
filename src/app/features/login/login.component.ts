import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl,
    password: new FormControl
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}
}
