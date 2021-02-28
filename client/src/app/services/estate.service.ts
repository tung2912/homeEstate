import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


const API = 'estate/';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }
  getNewest(): Observable<object> {
    return this.http.get(`${API}listNewestEstate`);
  }

  getAroundMillion(): Observable<object> {
    return this.http.get(`${API}listEstateAroundMillion`);
  }

  getAffordable(): Observable<object> {
    return this.http.get(`${API}listEstateAffordable`);
  }

  getLuxury(): Observable<object> {
    return this.http.get(`${API}ListEstateLuxury`);
  }

  getById(id): Observable<object> {
    return this.http.get(`${API}detail/${id}`);
  }

  getEstatesBySearch(searchValue): Observable<object> {
    return this.http.get(`${API}search/${searchValue}`);
  }

}
