import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserCreationDTO } from '../models/state.constants';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:4202/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type', })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

    let postObj = {
      email: username,
      password: password
    }

    return this.http.post(AUTH_API + 'login',JSON.stringify(postObj),httpOptions).pipe(catchError(this.handleError));
  }

  register(postObj: UserCreationDTO): Observable<any> {
    return this.http.post(
      AUTH_API + 'create-user', postObj,
      httpOptions).pipe(catchError(this.handleError));
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }
}
