import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

const API = 'blog/';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll(): Observable<object> {
    return this.http.get(`${API}allBlog`);
  }
  getNewBlog(): Observable<object> {
    return this.http.get(`${API}newBlog`);
  }
  getPopularBlog(): Observable<object> {
    return this.http.get(`${API}popularBlog`);
  }
  // tslint:disable-next-line:typedef
  getById(id): Observable<object> {
    return this.http.get(`${API}detail/${id}`);
  }
}
