import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


const API = 'estate/';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<object> {
    return this.http.get(`${API}listEstate`);
  }

  getById(id) {
    return this.http.get(`${API}detail/${id}`);
  }

}
