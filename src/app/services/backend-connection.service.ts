
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, audit, catchError, throwError } from 'rxjs';
import { ScreenPages , CdrDataDTO, CyberBullyDataDTO, SuspectDataDTO, SdrDataDTO, CafFormDataDTO, NcrpDataDTO, SuspectAccountDTO} from '../models/state.constants';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


const AUTH_API = 'http://localhost:4202/web-data/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type', })
};

const httpFileOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data',
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
  private listOfcdrDataMapName = "listOfCdrData";
  private cdrExcelDataUploadMapName = "uploadExcelData";

  private cyberBullyMapName = "Cyber-Bully-Data";
  private listOfCyberDataMapName = "listOfCyberBullyData";

  private suspectDataMapName = "Suspect-Data";
  private listOfSuspectDataMapName = "listOfSuspectData";

  private sdrDataMapName = "Sdr-Data";
  private listOfSdrDataMapName = "listOfSdrData";


  private cafFormDataMapName = "Caf-Form-Data";
  private listOfCafFormDataMapName = "listOfCafFormData";

  private ncrpDataMapName = "Ncrp-Data";
  private listOfNcrpDataMapName = "listOfNcrpData";

  private suspectAccntDataMapName = "Suspect-Account-Data";
  private listOfSuspectAccntDataMapName = "listOfSuspectAccountData";



  constructor(private http: HttpClient) { }

  getListOfStationNames(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfStationsMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  getScreenNames(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfScreensMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitCdrData(postObj: CdrDataDTO): Observable<any>{
    const apiUrl =  `${AUTH_API + this.cdrDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }


  getListOfCdrData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfcdrDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }

  submitCdrExcelDataUpload(file: any): Observable<any>{
    const form = new FormData;
    form.append('file', file);
    const apiUrl =  `${AUTH_API + 'typeOfData/CDR-DATA/' + this.cdrExcelDataUploadMapName}`;
    return this.http.post<any>(apiUrl, form).pipe(catchError(this.handleError));
  }


  submitCyberBullyData(postObj: CyberBullyDataDTO): Observable<any>{
    // const form = new FormData;
    // form.append('cyberBullyDtoStr', JSON.stringify(postObj));
    const apiUrl =  `${AUTH_API + this.cyberBullyMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfCyberBullyData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfCyberDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitSuspectData(postObj: SuspectDataDTO): Observable<any>{
    const apiUrl =  `${AUTH_API + this.suspectDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfSuspectData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfSuspectDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitSdrData(postObj: SdrDataDTO): Observable<any>{
    const apiUrl =  `${AUTH_API + this.sdrDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfSdrData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfSdrDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitCafFormData(postObj: CafFormDataDTO): Observable<any>{
    const apiUrl =  `${AUTH_API + this.cafFormDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfCafFormData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfCafFormDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitNcrpData(postObj: NcrpDataDTO): Observable<any>{
    const apiUrl =  `${AUTH_API + this.ncrpDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfNcrpData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfNcrpDataMapName}`;
    return this.http.get<any>(apiUrl , httpOptions).pipe(catchError(this.handleError));
  }


  submitSuspectAccntData(postObj: SuspectAccountDTO): Observable<any>{
    const apiUrl =  `${AUTH_API + this.suspectAccntDataMapName}`;
    return this.http.post<any>(apiUrl, postObj, httpOptions).pipe(catchError(this.handleError));
  }

  getListOfSuspectAccntData(): Observable<any>{
    const apiUrl =  `${AUTH_API + this.listOfSuspectAccntDataMapName}`;
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

