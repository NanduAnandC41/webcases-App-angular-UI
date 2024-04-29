import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';


const TOKEN_KEY = 'auth-token';
const JWT_KEY = 'auth-token'
const USER_KEY = 'auth-user';
const USER_DATA = 'user-data'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _userData = new BehaviorSubject<any>('');
  userData: Observable<any> = this._userData.asObservable();


  constructor(private authService: AuthService) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(JWT_KEY);
    window.sessionStorage.setItem(JWT_KEY, token);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.authService.userdata(user.username).subscribe( res => {
      if(res && res.success){
        console.log(res);
        this._userData.next(res.data);

        window.sessionStorage.removeItem(USER_DATA);
        window.sessionStorage.setItem(USER_DATA, JSON.stringify(res.data));
      }
    });
  }

  public getUser(): any {

    const user = window.sessionStorage.getItem(USER_DATA);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
