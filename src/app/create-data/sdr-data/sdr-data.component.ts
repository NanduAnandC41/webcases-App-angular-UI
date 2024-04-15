import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup,
  FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { StationNamesDTO } from '../../models/state.constants';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-sdr-data',
  templateUrl: './sdr-data.component.html',
  styleUrls: ['./sdr-data.component.css']
})
export class SdrDataComponent implements OnInit{
  public sdrDataForm!: FormGroup;

  stationNames: StationNamesDTO[] = [];

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

    this.sdrDataForm = this.formBuilder.group({

      uploadFile: new FormControl(),
      selectValue:  new FormControl(),
      searchField: new FormControl(),

      searchValue: new FormControl(),

      serialNo: new FormControl(),
      telephoneNo: new FormControl(),
      alternatePhNo: new FormControl(),
      subscriberName: new FormControl(),
      dateOfBirth: new FormControl(),
      guardianName: new FormControl(),
      localAddress: new FormControl(),
      permanentAddress: new FormControl(),
      emailId: new FormControl(),
      gender: new FormControl(),
      nationality: new FormControl(),
      subscriberProfession: new FormControl(),
      panGirNo: new FormControl(),

      photoIdProof: new FormControl(),
      cafSerialNo: new FormControl(),
      idProofDetails: new FormControl(),
      subscriberStatus: new FormControl(),
      connectionType: new FormControl(),
      localReference: new FormControl(),
      mobileNoCustomerSig: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      imsiNo: new FormControl(),
      serviceProvider: new FormControl(),
      connectionStatus: new FormControl(),
      prevServiceProvider: new FormControl(),
      previousCircle: new FormControl(),
      pointSaleCode: new FormControl(),

      simActiveDateTime: new FormControl(),
      transeKycDeclareResponseactionId: new FormControl(),
      customerPhoto: new FormControl(),
      transactionId: new FormControl(),
      addOnValue: new FormControl(),
      eKycAuthResponse: new FormControl(),
      eKycDeclareResponse: new FormControl(),
      agentAadharNo: new FormControl(),
      postAuthResponse: new FormControl(),
      circle: new FormControl(),
      entryDate: new FormControl(),

      policeStation: new FormControl(),

    });



  }


  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.sdrDataForm.value);

    if(this.sdrDataForm.value.uploadFile != "" ||
      this.sdrDataForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }


  customerPhotoSelected(event: any){
      console.log(event.target.value);
  }

  addSdrDetails(){

  }

  updateSdrSearchValue(){

  }


  bulkUploadOfSdrData(){

  }

}
