import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from './models/entities';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(data => console.log(data)),
      );
  }

  getUser(userId: string) {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + userId)
      .pipe(
        tap(data => console.log(data)),
      );
  }

  getPosts(userId: string) {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { params })
      .pipe(
        tap(data => console.log(data)),
      );
  }

  getToDos(userId: string) {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get('https://jsonplaceholder.typicode.com/todos', { params })
      .pipe(
        tap(data => console.log(data)),
      );
  }


}
