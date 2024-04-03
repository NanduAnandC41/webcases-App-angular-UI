import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor() { }


  private _valueTransfer = new BehaviorSubject<string>('');
  valueTransfer: Observable<string> = this._valueTransfer.asObservable();
  dataValue: string = '';




  valueAppendToTransfer(value: string){
    this._valueTransfer.next(value)
  }





}
