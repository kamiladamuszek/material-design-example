import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {

  @Input() drawer: any;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    if (this.drawer.opened) {
      this.drawer.toggle();
      this.auth.logout();
    }
  }
}
