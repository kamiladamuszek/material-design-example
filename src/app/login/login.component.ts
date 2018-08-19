import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErrorService} from '../services/error.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ErrorService]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private _router: Router, private _errorService: ErrorService,
              private auth: AuthService) {
  }

  ngOnInit() {
  }

  checkUserNamePassword() {
    this.auth.login(this.username, this.password);

  }

  checkKey(event) {
    if (event.keyCode === 13) {
      this.checkUserNamePassword();
    }
  }

}
