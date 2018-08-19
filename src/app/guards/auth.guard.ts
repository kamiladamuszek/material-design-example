import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate() {
    const idToken = localStorage.getItem('id_token');
    if (idToken) {
      const date1 = Number(localStorage.getItem('expires_at'));
      const date2 = (new Date()).getTime();
      if (date1 >= date2) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
