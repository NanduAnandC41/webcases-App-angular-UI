import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup,
  FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { StationNamesDTO, SuspectDataDTO } from '../../models/state.constants';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';




@Component({
  selector: 'app-suspect-data',
  templateUrl: './suspect-data.component.html',
  styleUrls: ['./suspect-data.component.css']
})
export class SuspectDataComponent implements OnInit{
  public suspectDataForm!: FormGroup;

  newDataUpdate: boolean = false;
  searchValue: string = "";
  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;

  stationNames: StationNamesDTO[] = [];


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

    this.suspectDataForm = this.formBuilder.group({

      uploadFile: new FormControl(),
      selectValue:  new FormControl(),
      searchField: new FormControl(),

      searchValue: new FormControl(),

      ModusOfOperandi: new FormControl(),
      firNo: new FormControl(),
      SecOfLaw: new FormControl(),
      name: new FormControl(),
      fatherName: new FormControl(),
      address: new FormControl(),
      suspectPhoneNo: new FormControl(),
      suspectUsedImeis: new FormControl(),
      suspectPdf: new FormControl(),
      suspectBparty: new FormControl(),
      bankAccountNo: new FormControl(),
      ifsc: new FormControl(),
      upiIds: new FormControl(),
      aadharNo: new FormControl(),
      rationCardNo: new FormControl(),
      drivingLicense: new FormControl(),
      vehicleInfo: new FormControl(),
      panNo: new FormControl(),
      gmailIds: new FormControl(),
      facebookIds: new FormControl(),
      instagramId: new FormControl(),
      whatsappNo: new FormControl(),
      otherSocialMedia: new FormControl(),
      photosOfSuspect: new FormControl(),
      caseRelatedScreens: new FormControl(),
      webAddress: new FormControl(),
      dateOfArrest: new FormControl(),
      previousCrimeData: new FormControl(),
      remarks: new FormControl(),
      stationame: new FormControl(),
      policeStation: new FormControl()

    });



  }


  suspectPhotoSelection(event : any){
    console.log(event.target.files);

    console.log(this.suspectDataForm.value);
  }

  caseRelatedScreensSelection(event: any){
    console.log(event.target.files);

    console.log(this.suspectDataForm.value);
  }

  addSuspectDataDetails(): void{

  }

  updateSuspectDataSearchValue(): void{

  }

  bulkUploadOfSuspectData():void{

  }


  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.suspectDataForm.value);

    if(this.suspectDataForm.value.uploadFile != "" ||
      this.suspectDataForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }


  submitSuspectData(){
    console.log(this.suspectDataForm.value);


    if(
      (this.suspectDataForm.value.ModusOfOperandi === '' || this.suspectDataForm.value.ModusOfOperandi == null) &&
      (this.suspectDataForm.value.firNo === '' || this.suspectDataForm.value.firNo == null) &&
      (this.suspectDataForm.value.SecOfLaw === '' || this.suspectDataForm.value.SecOfLaw == null) &&
      (this.suspectDataForm.value.name === '' || this.suspectDataForm.value.name == null) &&
      (this.suspectDataForm.value.fatherName === '' || this.suspectDataForm.value.fatherName == null) &&
      (this.suspectDataForm.value.address === '' || this.suspectDataForm.value.address == null) &&
      (this.suspectDataForm.value.suspectPhoneNo === '' || this.suspectDataForm.value.suspectPhoneNo  == null) &&
      (this.suspectDataForm.value.suspectUsedImeis === '' || this.suspectDataForm.value.suspectUsedImeis == null) &&
      (this.suspectDataForm.value.suspectPdf === '' || this.suspectDataForm.value.suspectPdf == null) &&
      (this.suspectDataForm.value.suspectBparty === '' || this.suspectDataForm.value.suspectBparty == null) &&
      (this.suspectDataForm.value.bankAccountNo === '' || this.suspectDataForm.value.bankAccountNo == null) &&
      (this.suspectDataForm.value.ifsc === '' || this.suspectDataForm.value.ifsc == null) &&
      (this.suspectDataForm.value.upiIds === '' || this.suspectDataForm.value.upiIds == null) &&
      (this.suspectDataForm.value.aadharNo === '' || this.suspectDataForm.value.aadharNo == null) &&
      (this.suspectDataForm.value.rationCardNo === '' || this.suspectDataForm.value.rationCardNo == null) &&
      (this.suspectDataForm.value.drivingLicense === '' || this.suspectDataForm.value.drivingLicense == null) &&
      (this.suspectDataForm.value.vehicleInfo === '' || this.suspectDataForm.value.vehicleInfo == null) &&
      (this.suspectDataForm.value.panNo === '' || this.suspectDataForm.value.panNo == null) &&
      (this.suspectDataForm.value.gmailIds === '' || this.suspectDataForm.value.gmailIds == null) &&
      (this.suspectDataForm.value.facebookIds === '' || this.suspectDataForm.value.facebookIds == null) &&
      (this.suspectDataForm.value.instagramId === '' || this.suspectDataForm.value.instagramId == null) &&
      (this.suspectDataForm.value.whatsappNo === '' || this.suspectDataForm.value.whatsappNo == null) &&
      (this.suspectDataForm.value.otherSocialMedia === '' || this.suspectDataForm.value.otherSocialMedia == null) &&
      (this.suspectDataForm.value.caseRelatedScreens === '' || this.suspectDataForm.value.caseRelatedScreens == null) &&
      (this.suspectDataForm.value.webAddress === '' || this.suspectDataForm.value.webAddress == null) &&
      (this.suspectDataForm.value.dateOfArrest === '' || this.suspectDataForm.value.dateOfArrest == null) &&
      (this.suspectDataForm.value.previousCrimeData === '' || this.suspectDataForm.value.previousCrimeData == null) &&
      (this.suspectDataForm.value.remarks === '' || this.suspectDataForm.value.remarks == null) &&
      (this.suspectDataForm.value.policeStation === '' || this.suspectDataForm.value.policeStation == null)

    ){
      alert("Please fill the data");
    } else {


      let selectedStationName = this.stationNames.filter((obj) => {
        return obj.stationId == this.suspectDataForm.value.policeStation
      });

      console.log(selectedStationName);

      let submitObj: SuspectDataDTO = {
        modeOfOperandi: this.suspectDataForm.value.ModusOfOperandi,
        firNo: this.suspectDataForm.value.firNo,
        secOfLaw: this.suspectDataForm.value.SecOfLaw,
        stationName: selectedStationName[0].stationName,
        stationId: this.suspectDataForm.value.policeStation,
        suspectName: this.suspectDataForm.value.name,
        fatherName: this.suspectDataForm.value.fatherName,
        address: this.suspectDataForm.value.address,
        suspectPhoneNos: this.suspectDataForm.value.suspectPhoneNo,
        suspectImeis: this.suspectDataForm.value.suspectUsedImeis,
        suspectCaf: this.suspectDataForm.value.suspectPdf,
        suspectBpartyNos: this.suspectDataForm.value.suspectBparty,
        bankAcntNos: this.suspectDataForm.value.bankAccountNo,
        ifscs: this.suspectDataForm.value.ifsc,
        upIds: this.suspectDataForm.value.upiIds,
        aadharNo: this.suspectDataForm.value.aadharNo,
        rationCard: this.suspectDataForm.value.rationCardNo,
        drivingLicense: this.suspectDataForm.value.drivingLicense,
        vehicleDetails: this.suspectDataForm.value.vehicleInfo,
        panCardNo: this.suspectDataForm.value.panNo,
        gmailIds: this.suspectDataForm.value.gmailIds,
        faceBookIds: this.suspectDataForm.value.facebookIds,
        instagramIds: this.suspectDataForm.value.instagramId,
        whatsAppNos: this.suspectDataForm.value.whatsappNo,
        otherSocialAccnts: this.suspectDataForm.value.otherSocialMedia,
        photosOfSuspect: this.suspectDataForm.value.photosOfSuspect,
        caseRelatedScreenShots: this.suspectDataForm.value.caseRelatedScreens,
        suspectWebsiteAddress: this.suspectDataForm.value.webAddress,
        dateOfArrest: this.suspectDataForm.value.dateOfArrest,
        previousCrimeHistory: this.suspectDataForm.value.previousCrimeData,
        remarks: this.suspectDataForm.value.remarks,
      }


    }



  }

}
