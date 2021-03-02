import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Form} from "@angular/forms";


const API = 'estate/';

interface postEstateRequest {
  owner_id: number;
  city_id: number;
  address: string;
  price: number;
  floor_space: number;
  bedroom_nums: number;
  bathroom_nums: number;
  garage_nums: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
}

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

  postEstate(postEstateData: FormData): Observable<any> {
    return this.http.post(`${API}createEstate`, postEstateData);
  }

  getEstatesBySearch(searchValue): Observable<object> {
    return this.http.get(`${API}search/${searchValue}`);
  }
}
