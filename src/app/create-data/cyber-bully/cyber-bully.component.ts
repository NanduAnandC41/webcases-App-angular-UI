import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { BackendConnectionService } from '../../services/backend-connection.service';
import { CyberBullyDataDTO } from  '../../models/state.constants';
import { DataRequestService } from '../../services/data-request.service';


@Component({
  selector: 'app-cyber-bully',
  templateUrl: './cyber-bully.component.html',
  styleUrls: ['./cyber-bully.component.css']
})
export class CyberBullyComponent implements OnInit{
  public cyberBullyForm!: FormGroup;

  newDataUpdate: boolean = false;
  searchValue: string = "";
  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;

  constructor(protected formBuilder: FormBuilder,
    private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService) {

      this.dataRequestService.valueTransfer.subscribe(res => {
        if(res){
          console.log("transfer value : ", res);
        }
      });


  }

  ngOnInit(): void {

    this.cyberBullyForm = this.formBuilder.group({

      searchValue: new FormControl(),
      uploadFile: new FormControl(),

      fullName: new FormControl(),
      sonDaughterWifeOf: new FormControl(),
      dateOfBirth: new FormControl(),
      fullAddress: new FormControl(),
      aadharNo: new FormControl(),
      mobileNo: new FormControl(),
      emailIdPersonal: new FormControl(),
      emailIdOfficial: new FormControl(),
      professionJob: new FormControl(),
      prevJobDetails: new FormControl(),
      monthlyIncome: new FormControl(),
      vehicleDetails: new FormControl(),
      bankAccountDetails: new FormControl(),
      panCardNo: new FormControl(),
      drivingLicenseNo: new FormControl(),
      passPortDetails: new FormControl(),
      friendDetails: new FormControl(),
      facebookDetails: new FormControl(),
      twittedId: new FormControl(),
      instagramId: new FormControl(),
      youTubeDetails: new FormControl(),
      whatsAppDetails: new FormControl(),
      telegramNo: new FormControl(),
      imoNo: new FormControl(),
      tiktokId: new FormControl(),
      heloId: new FormControl(),
      linkedInId: new FormControl(),
      previousCases: new FormControl(),
      photoDetails: new FormControl(),
    });

  }


  seachValueToCyberBullyForm(): void{
    console.log(this.cyberBullyForm.value.searchValue);
    if(this.cyberBullyForm.value.searchValue != "" ||
        this.cyberBullyForm.value.searchValue != null){
          this.updateDataButton = false;
    }
  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.cyberBullyForm.value);

    if(this.cyberBullyForm.value.uploadFile != "" ||
      this.cyberBullyForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }


  addCyberBullyDetails(): void{
    // this.newDataUpdate = !this.newDataUpdate;
  }

  cyberBullySearchValue(): void{
    // this.newDataUpdate = !this.newDataUpdate;
    console.log("Search Value : " + this.searchValue);
  }

  updateCyberBullySearchValue(): void {
    // this.newDataUpdate = !this.newDataUpdate;
  }

  bulkUploadOfCyberBully(): void{

  }


  submitCyberBullyData():void {
    console.log("Submit Cyber Bully Data");

    console.log("Form  values : ", this.cyberBullyForm.value);
    if((this.cyberBullyForm.value.fullName === '' || this.cyberBullyForm.value.fullName == null) &&
    (this.cyberBullyForm.value.sonDaughterWifeOf === '' || this.cyberBullyForm.value.sonDaughterWifeOf == null) &&
    (this.cyberBullyForm.value.dateOfBirth === '' || this.cyberBullyForm.value.dateOfBirth == null) &&
    (this.cyberBullyForm.value.fullAddress === '' || this.cyberBullyForm.value.fullAddress == null) &&
    (this.cyberBullyForm.value.aadharNo === '' || this.cyberBullyForm.value.aadharNo == null) &&
    (this.cyberBullyForm.value.mobileNo === '' || this.cyberBullyForm.value.mobileNo == null) &&
    (this.cyberBullyForm.value.emailIdPersonal === '' || this.cyberBullyForm.value.emailIdPersonal == null) &&
    (this.cyberBullyForm.value.emailIdOfficial === '' || this.cyberBullyForm.value.emailIdOfficial == null) &&
    (this.cyberBullyForm.value.professionJob === '' || this.cyberBullyForm.value.professionJob == null) &&
    (this.cyberBullyForm.value.prevJobDetails === '' || this.cyberBullyForm.value.prevJobDetails == null) &&
    (this.cyberBullyForm.value.monthlyIncome === '' || this.cyberBullyForm.value.monthlyIncome == null) &&
    (this.cyberBullyForm.value.vehicleDetails === '' || this.cyberBullyForm.value.vehicleDetails == null) &&
    (this.cyberBullyForm.value.bankAccountDetails === '' || this.cyberBullyForm.value.bankAccountDetails == null) &&
    (this.cyberBullyForm.value.drivingLicenseNo === '' || this.cyberBullyForm.value.drivingLicenseNo == null) &&
    (this.cyberBullyForm.value.passPortDetails === '' || this.cyberBullyForm.value.passPortDetails == null) &&
    (this.cyberBullyForm.value.friendDetails === '' || this.cyberBullyForm.value.friendDetails == null) &&
    (this.cyberBullyForm.value.facebookDetails === '' || this.cyberBullyForm.value.facebookDetails == null) &&
    (this.cyberBullyForm.value.twittedId === '' || this.cyberBullyForm.value.twittedId == null) &&
    (this.cyberBullyForm.value.instagramId === '' || this.cyberBullyForm.value.instagramId == null) &&
    (this.cyberBullyForm.value.youTubeDetails === '' || this.cyberBullyForm.value.youTubeDetails == null) &&
    (this.cyberBullyForm.value.whatsAppDetails === '' || this.cyberBullyForm.value.whatsAppDetails == null) &&
    (this.cyberBullyForm.value.telegramNo === '' || this.cyberBullyForm.value.telegramNo == null) &&
    (this.cyberBullyForm.value.imoNo === '' || this.cyberBullyForm.value.imoNo == null) &&
    (this.cyberBullyForm.value.tiktokId === '' || this.cyberBullyForm.value.tiktokId == null) &&
    (this.cyberBullyForm.value.heloId === '' || this.cyberBullyForm.value.heloId == null) &&
    (this.cyberBullyForm.value.linkedInId === '' || this.cyberBullyForm.value.linkedInId == null) &&
    (this.cyberBullyForm.value.previousCases === '' || this.cyberBullyForm.value.previousCases == null) &&
    (this.cyberBullyForm.value.photoDetails === '' || this.cyberBullyForm.value.photoDetails == null) ){

      alert("Please fill the data");

    } else {

      let submitObj: CyberBullyDataDTO = {
        fullName: this.cyberBullyForm.value.fullName,
        sonDaughterWifeOf: this.cyberBullyForm.value.sonDaughterWifeOf,
        dateOfBirth: this.cyberBullyForm.value.dateOfBirth,
        fullAddress: this.cyberBullyForm.value.fullAddress,
        aadharNo: this.cyberBullyForm.value.aadharNo,
        mobileNo: this.cyberBullyForm.value.mobileNo,
        emaiIdOfficial: this.cyberBullyForm.value.emailIdOfficial,
        emaiIdPersonal: this.cyberBullyForm.value.emailIdPersonal,
        professionJob: this.cyberBullyForm.value.professionJob,
        prevJobDetails: this.cyberBullyForm.value.prevJobDetails,
        monthlyIncome: this.cyberBullyForm.value.monthlyIncome,
        vehicleDetails: this.cyberBullyForm.value.vehicleDetails,
        bankAccountDetails: this.cyberBullyForm.value.bankAccountDetails,
        panCardNo: this.cyberBullyForm.value.panCardNo,
        drivingLicenseNo: this.cyberBullyForm.value.drivingLicenseNo,
        passPortDetails: this.cyberBullyForm.value.passPortDetails,
        friendDetails: this.cyberBullyForm.value.friendDetails,
        facebookDetails: this.cyberBullyForm.value.facebookDetails,
        twittedId: this.cyberBullyForm.value.twittedId,
        instagramId: this.cyberBullyForm.value.instagramId,
        youTubeDetails: this.cyberBullyForm.value.youTubeDetails,
        whatsAppDetails: this.cyberBullyForm.value.whatsAppDetails,
        telegramNo: this.cyberBullyForm.value.telegramNo,
        imoNo: this.cyberBullyForm.value.imoNo,
        tiktokId: this.cyberBullyForm.value.tiktokId,
        heloId: this.cyberBullyForm.value.heloId,
        previousCases: this.cyberBullyForm.value.previousCases,
        linkedInId: this.cyberBullyForm.value.linkedInId
      }


      this.backendConnectionService.submitCyberBullyData(submitObj).subscribe(res => {
        if(res && res.success){
          alert(res.data);
          this.cyberBullyForm.reset();
        } else if(res && !res.success){
          alert(res.data);
        }
      },err => {
        if(err){
          alert("Facing Some Issue while submitting data, please check later");
        }
      });

    }




  }

}
