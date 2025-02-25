import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _isAuthenticated$ = new BehaviorSubject(true);
  readonly isAuthenticated$ = this._isAuthenticated$.asObservable(); 

  login() {
    this._isAuthenticated$.next(true);
  }

  logout() {
    this._isAuthenticated$.next(false);
  }

  get isAuthenticated() {
    return this._isAuthenticated$.value;
  }
}
