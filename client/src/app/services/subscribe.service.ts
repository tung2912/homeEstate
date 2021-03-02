import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = 'subscribes/';
interface SubForClientRequest {
  name: string;
  email: string;
  address: string;
  phone: string;
  estate_id: number;
}

interface SubForOwnerRequest {
  owner_id: number;
  estate_id: number;
}
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  subForClient(subForClientData: SubForClientRequest): Observable<any> {
    return this.http.post(`${API}subForClient`, subForClientData);
  }

  subForOwner(subForOwnerData: SubForOwnerRequest): Observable<any> {
    return this.http.post(`${API}subForOwner`, subForOwnerData);
  }
}
