import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { CdrDataDTO, StationNamesDTO, cdrInformation } from '../../models/state.constants';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';


@Component({
  selector: 'app-cdr-data',
  templateUrl: './cdr-data.component.html',
  styleUrls: ['./cdr-data.component.css']
})
export class CdrDataComponent implements OnInit{

  public cdrDataForm!: FormGroup;
  dtOptions: DataTables.Settings = {};
  crimeData: cdrInformation[] = [];

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

    this.cdrDataForm = this.formBuilder.group({

      uploadFile: new FormControl(),
      selectValue:  new FormControl(),
      searchField: new FormControl(),

      searchValue: new FormControl(),

      crimeNo: new FormControl(),
      partyA: new FormControl(),
      partyB: new FormControl(),
      dateTime: new FormControl(),
      duration: new FormControl(),
      cellType: new FormControl(),
      firstCellId: new FormControl(),
      lastCellId: new FormControl(),
      imeiA: new FormControl(),
      imsiA: new FormControl(),
      cellIdAddress: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),

      policeStation: new FormControl(),

    });



  }


  seachValueToCdrDataForm(): void{
    // console.log("seach value : " + this.searchValue);
    // if(this.searchValue != "" ||
    //   this.searchValue != null){
    //     this.updateDataButton = false;
    // }

    console.log(this.cdrDataForm.value.searchValue);
    if(this.cdrDataForm.value.searchValue != "" ||
        this.cdrDataForm.value.searchValue != null){
          this.updateDataButton = false;
    }
  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files[0]);

    console.log(this.cdrDataForm.value);

    this.cdrDataForm.value.uploadFile = event.target.files[0];

    if(this.cdrDataForm.value.uploadFile != "" ||
      this.cdrDataForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }


  addCdrDetails(): void {
    console.log("New CDR Data");
  }

  updateCdrSearchValue(): void {
    console.log("Update CDR Data");
  }

  bulkUploadOfCdrData(): void {
    console.log("Bulk Upload CDR Data");

    console.log(this.cdrDataForm.value.uploadFile);

    this.backendConnectionService.submitCdrExcelDataUpload(this.cdrDataForm.value.uploadFile).subscribe(res => {

      if(res && res.success){
        console.log("Response value : ", res);
        alert(res.data);
        this.cdrDataForm.reset();
      } else if(res && !res.success){
        alert(res.data);
      }
    }, err => {
      if(err){
        alert(err);
      }
    });

  }

  submitCdrData(): void {
    console.log(this.cdrDataForm.value);

    if(
        (this.cdrDataForm.value.crimeNo == '' ||  this.cdrDataForm.value.crimeNo == null) &&
        (this.cdrDataForm.value.partyA == '' ||  this.cdrDataForm.value.partyA == null) &&
        (this.cdrDataForm.value.partyB == '' ||  this.cdrDataForm.value.partyB == null) &&
        (this.cdrDataForm.value.dateTime == '' ||  this.cdrDataForm.value.dateTime == null) &&
        (this.cdrDataForm.value.duration == '' ||  this.cdrDataForm.value.duration == null) &&
        (this.cdrDataForm.value.cellType == '' ||  this.cdrDataForm.value.cellType == null) &&
        (this.cdrDataForm.value.firstCellId == '' ||  this.cdrDataForm.value.firstCellId == null) &&
        (this.cdrDataForm.value.lastCellId == '' ||  this.cdrDataForm.value.lastCellId == null) &&
        (this.cdrDataForm.value.imeiA == '' ||  this.cdrDataForm.value.imeiA == null) &&
        (this.cdrDataForm.value.imsiA == '' ||  this.cdrDataForm.value.imsiA == null) &&
        (this.cdrDataForm.value.cellIdAddress == '' ||  this.cdrDataForm.value.cellIdAddress == null) &&
        (this.cdrDataForm.value.latitude == '' ||  this.cdrDataForm.value.latitude == null) &&
        (this.cdrDataForm.value.longitude == '' ||  this.cdrDataForm.value.longitude == null) &&
        (this.cdrDataForm.value.policeStation == '' ||  this.cdrDataForm.value.policeStation == null) &&
        (this.cdrDataForm.value.selectValue == '' ||  this.cdrDataForm.value.selectValue == null)
        ){
          alert("Please provide the form values to submit");
    } else {

      let selectedStationName = this.stationNames.filter((obj) => {
        return obj.stationId == this.cdrDataForm.value.policeStation
      });

      console.log(selectedStationName);


      let submitObj: CdrDataDTO = {
        crimeNo: this.cdrDataForm.value.crimeNo,
        partyA: this.cdrDataForm.value.partyA,
        partyB: this.cdrDataForm.value.partyB,
        dateTime: this.cdrDataForm.value.dateTime,
        duration: this.cdrDataForm.value.duration,
        cellType: this.cdrDataForm.value.cellType,
        firstCellId: this.cdrDataForm.value.firstCellId,
        lastCellId: this.cdrDataForm.value.lastCellId,
        imeiA: this.cdrDataForm.value.imeiA,
        imsiA: this.cdrDataForm.value.imsiA,
        cellIdAddress: this.cdrDataForm.value.cellIdAddress,
        latitude: this.cdrDataForm.value.latitude,
        longitude: this.cdrDataForm.value.longitude,
        policeStation: selectedStationName[0].stationName,
        selectValue: Number(this.cdrDataForm.value.policeStation)
      }

      this.backendConnectionService.submitCdrData(submitObj).subscribe(res => {
        if(res && res.success){
          console.log("Response value : ", res);
          alert(res.data);
          this.cdrDataForm.reset();
        } else if(res && !res.success){
          alert(res.data);
        }
      }, err => {
        if(err){
          alert("Facing Some Issue while submitting data, please check later");
        }
      });


    }
  }

}
