import {Component, OnInit, Input} from '@angular/core';
import {LocalstorageService} from '../../services/localstorage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [LocalstorageService]
})
export class FavoritesComponent implements OnInit {

  @Input() favorites: Array<Object>;

  constructor(private localStorageService: LocalstorageService) {
  }

  ngOnInit() {
  }

  deleteFavoriteRecord(index: number) {
    this.localStorageService.deleteFavorite(index);
    this.favorites = this.localStorageService.getFavoriteObjects();
  }

}
