import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ErrorService} from '../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ErrorService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login = new Login();


  constructor(private router: Router, private errorService: ErrorService) {
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
    this.errorService.showSnackBar('Login incorrect', 'Please check your credetials');
  }
}

class Login {
  constructor(public username?: string, public password?: string) {
  }
}
