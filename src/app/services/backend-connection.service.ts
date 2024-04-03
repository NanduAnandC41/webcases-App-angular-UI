
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, audit, catchError, throwError } from 'rxjs';
import { ScreenPages , CdrDataDTO, CyberBullyDataDTO} from '../models/state.constants';


const AUTH_API = 'http://localhost:4202/web-data/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type', })
};

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {


  private listOfScreensMapName = "listOfScreenNames";
  private listOfStationsMapName = "listOfStationNames";
  private cdrDataMapName = "Cdr-Data";
  private cyberBullyMapName = "Cyber-Bully-Data";
  private listOfcdrDataMapName = "listOfCdrData";
  private listOfCyberDataMapName = "listOfCyberBullyData";


  constructor(private http: HttpClient) { }



  getScreenNames(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfScreensMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitCdrData(postObj: CdrDataDTO): Observable<any>{
    // const form = new FormData;
    // form.append('cdrDataDtoStr', JSON.stringify(postObj));
    const apiUrl =  `${AUTH_API + this.cdrDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  submitCyberBullyData(postObj: CyberBullyDataDTO): Observable<any>{
    // const form = new FormData;
    // form.append('cyberBullyDtoStr', JSON.stringify(postObj));
    const apiUrl =  `${AUTH_API + this.cyberBullyMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfStationNames(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfStationsMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  getListOfCdrData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfcdrDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  getListOfCyberBullyData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfCyberDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
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

