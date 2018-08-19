import {Component, Input, OnInit} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [LocalstorageService]
})
export class FavoritesComponent implements OnInit {

  @Input() favorites: Array<Object>;

  constructor(private localStorage: LocalstorageService) {
  }

  ngOnInit() {
  }

  deleteFavoriteRecord(index: number) {
    this.localStorage.deleteFavorite(index);
    this.favorites = this.localStorage.getFavoriteObjects();
  }
}
