import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TokenService} from './token.service';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Owner} from '../shared/models/owner.model';

const URI = 'auth';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  owner: OwnerData;
  token: string;
  token_type: string;
  token_validity: string;
}

interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
  address: string;
  phone: string;
}

type OwnerData = Owner;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private owner = new BehaviorSubject<OwnerData>(null);

  constructor(
    private Token: TokenService,
    private http: HttpClient
  ) {
    // Fetch Owner Data From Local Storage While Service initial
    this.fetchOwnerFromLS();
  }

  get owner$(): Observable<OwnerData> {
    return this.owner;
  }
  get loggedIn$(): Observable<boolean> {
    return this.owner$.pipe(
      map(data => !!data)
    );
  }

  fetchOwnerFromLS(): void {
    const ownerStr = localStorage.getItem('owner');
    const owner = ownerStr ? JSON.parse(ownerStr) : null;
    this.owner.next(owner);
  }

  login(email: string, password: string): Observable<any> {
    const body: LoginRequest = {
      email,
      password
    };

    return this.http.post(`${URI}/login`, body)
      .pipe(
        tap((res: LoginResponse) => {
          this.owner.next(res.owner);
        })
      )
      ;
  }

  signUp(signUpData: SignUpRequest): Observable<any>{
    return this.http.post(`${URI}/register`, signUpData);
  }

  logOut(): void {
    this.owner.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('owner');
    localStorage.removeItem('loggedUser');
  }
}
