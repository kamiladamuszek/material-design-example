import {Injectable} from '@angular/core';
import * as auth0 from 'auth0-js';
import {AUTH_CONFIG} from '../interfaces/auth-variables';
import {Router} from '@angular/router';
import {ErrorService} from '../services/error.service';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: 'token token_id',
    redirectUri: AUTH_CONFIG.REDIRECT,
    scope: AUTH_CONFIG.SCOPE
  });

  loggedIn: boolean;

  constructor(private router: Router, private errorService: ErrorService) {
    if (this.authenticated) {
      this.loggedIn = true;
    }
  }


  login(username: String, password: String) {
    this.auth0.client.login({
      realm: 'Username-Password-Authentication',
      username,
      password,
      scope: 'openid profile'
    }, (err, authResult) => {
      if (err) {
        this.errorService.showSnackBar('Login Error', 'Please, check your credentials');
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        const expTime = authResult.expiresIn * 1000 + Date.now();
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expTime));
        this.loggedIn = true;
        this.router.navigate(['/home']);
      }
    });
  }

  get authenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.loggedIn = false;
    this.router.navigate(['/']);

  }

}
