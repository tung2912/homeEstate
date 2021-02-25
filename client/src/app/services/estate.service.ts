import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {Estate} from "../shared/models/estates.model";

const API = "estate/";

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${API}listEstate`);
  }

}
