import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent {
  
  constructor(private _router:Router, private auth:AuthService){
  }

  moveToLogin(){
    this._router.navigate(['./login']);
  }
}
