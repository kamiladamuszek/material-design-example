import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {
  }

  getRepositiories(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '/repos');
  }

}
