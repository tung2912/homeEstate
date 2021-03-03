import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API = 'owner/';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getOwnerInfo(ownerId: number): Observable<object> {
    return this.http.get(`${API}ownerInfo/${ownerId}`);
  }
}
