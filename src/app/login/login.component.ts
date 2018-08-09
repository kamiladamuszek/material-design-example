import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login = new Login();


  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

    this.loginForm.get('username').valueChanges.subscribe(value => {
      console.log(value);
    });
    this.loginForm.get('password').statusChanges.subscribe(value => {
      console.log(value);
    });

  }

  onSubmit() {
    this.login.username = this.loginForm.get('username').value; // inny sposób pobrania danych
    this.login.password = this.loginForm.value.password;
    console.log(this.loginForm);
  }
}

class Login {
  constructor(public username?: string, public password?: string) {
  }
}
