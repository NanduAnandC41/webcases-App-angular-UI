import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackendConnectionService } from './backend-connection.service';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  private _valueTransfer = new BehaviorSubject<string>('');
  valueTransfer: Observable<string> = this._valueTransfer.asObservable();
  dataValue: string = '';


  private _ListOfCdrData = new BehaviorSubject<any[]>([]);
  listOfCdrDat: Observable<any[]> = this._ListOfCdrData.asObservable();



  constructor(private backendConnectionService: BackendConnectionService) {


    this.backendConnectionService.getListOfCdrData().subscribe(res => {
      let listOfCdrData = [];
      console.log(res);
      if(res & res.success){
        listOfCdrData = res.data;
      }

      this._ListOfCdrData.next(listOfCdrData);

    });


  }




  valueAppendToTransfer(value: string){
    this._valueTransfer.next(value)
  }





}
