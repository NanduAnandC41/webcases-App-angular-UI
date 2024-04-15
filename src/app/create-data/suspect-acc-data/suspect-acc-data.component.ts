import { Component, OnInit } from '@angular/core';
import { StationNamesDTO } from '../../models/state.constants';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';



@Component({
  selector: 'app-suspect-acc-data',
  templateUrl: './suspect-acc-data.component.html',
  styleUrls: ['./suspect-acc-data.component.css']
})
export class SuspectAccDataComponent {
  public suspectAcntDataForm!: FormGroup;

  stationNames: StationNamesDTO[] = [];

  searchValue: string = "";
  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;


  constructor(protected formBuilder: FormBuilder,
    private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService) {

    this.backendConnectionService.getListOfStationNames().subscribe(res => {
      if(res && res.success){
        console.log(res);
        this.stationNames = res.data;
      }
    });

    this.dataRequestService.valueTransfer.subscribe(res => {
      if(res){
        console.log("transfer value : ", res);
      }
    });

  }


  ngOnInit(): void {
    this.suspectAcntDataForm = this.formBuilder.group({

      suspectName: new FormControl(),
      suspectAcntNo: new FormControl(),
      suspectPhoneNo: new FormControl(),
      suspectUpIds: new FormControl(),
      suspectUrls: new FormControl(),
      remarks: new FormControl(),
      policeStation: new FormControl(),



    });


  }



}
