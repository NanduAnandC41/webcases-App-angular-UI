import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-caf-forms-data',
  templateUrl: './caf-forms-data.component.html',
  styleUrls: ['./caf-forms-data.component.css']
})
export class CafFormsDataComponent implements OnInit {

  searchValue: string = '';
  currentDate = new Date();
  localAddressAccordian: boolean = false;
  permanentAddressAccordian: boolean = false;
  officeAddressAccordian: boolean = false;
  proofOfIdentityAccordian: boolean = false;
  proofOfAddressAccordian: boolean = false;
  othersAccordian: boolean = false;
  public cafDataForm!: FormGroup;

  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;

  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.cafDataForm = this.formBuilder.group({

      uploadFile: new FormControl(),
      searchValue: new FormControl(),

      typeOfSubscriber: new FormControl(),
      mobileNoAllotted: new FormControl(),
      imsiNo: new FormControl(),
      emailId: new FormControl(),
      customerName: new FormControl(),
      fatherOrHusbandNmame: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      panCardNo: new FormControl(),
      gstNo: new FormControl(),
      alternatePhNo: new FormControl(),
      mobileUsedFor: new FormControl(),
      customerSignature: new FormControl(),
      profession: new FormControl(),
      nationality: new FormControl(),
      passportNo: new FormControl(),
      visaNo: new FormControl(),
      visaType: new FormControl(),
      visaExpiry: new FormControl(),

      // Local Address

      localCareOf: new FormControl(),
      localHouseNo: new FormControl(),
      localStreetName: new FormControl(),
      localAreaName: new FormControl(),
      localLandmark: new FormControl(),
      localTown: new FormControl(),
      localDistrict: new FormControl(),
      localState: new FormControl(),
      localPinCode: new FormControl(),

      // Permanent Address

      permanentCareOf: new FormControl(),
      permanentHouseNo: new FormControl(),
      permanentStreetName: new FormControl(),
      permanentAreaName: new FormControl(),
      permanentLandmark: new FormControl(),
      permanentTown: new FormControl(),
      permanentDistrict: new FormControl(),
      permanentState: new FormControl(),
      permanentPinCode: new FormControl(),

      // Permanent Address

      officeHouseNo: new FormControl(),
      officeStreetName: new FormControl(),
      officeAreaName: new FormControl(),
      officeLandmark: new FormControl(),
      officeTown: new FormControl(),
      officeDistrict: new FormControl(),
      officeState: new FormControl(),
      officePinCode: new FormControl(),


      // Proof Of Identity Details

      typeOfPoi: new FormControl(),
      proofIdentityDocNo: new FormControl(),
      proofIdentityDateOfIssue: new FormControl(),
      proofIdentityPlaceOfIssue: new FormControl(),
      proofIdentityAuthority: new FormControl(),
      proofIdentityOfFile: new FormControl(),

      // Proof Of Address Details

      typeOfPoa: new FormControl(),
      proofAddressDocNo: new FormControl(),
      proofAddressDateOfIssue: new FormControl(),
      proofAddressPlaceOfIssue: new FormControl(),
      proofAddressAuthority: new FormControl(),
      proofOfAddressFile: new FormControl(),

      // Others

      totalNoOfConnections: new FormControl(),
      existingVIno: new FormControl(),
      tarrifPlanApplied: new FormControl(),
      valueAddedServices: new FormControl(),
      addedOnDetails: new FormControl(),


    });




  }


  addCafFormDetails(): void {

  }

  updateCafFormSearchValue(): void {

  }

  bulkUploadOfCafFormData(): void {

  }

  seachValueToCafFormDataForm(): void {
    // console.log("seach value : " + this.searchValue);
    // if(this.searchValue != "" ||
    //   this.searchValue != null){
    //     this.updateDataButton = false;
    // }

    console.log(this.cafDataForm.value.searchValue);
    if (this.cafDataForm.value.searchValue != "" ||
      this.cafDataForm.value.searchValue != null) {
      this.updateDataButton = false;
    }
  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.cafDataForm.value);

    if (this.cafDataForm.value.uploadFile != "" ||
      this.cafDataForm.value.uploadFile != null) {
      this.bulkDataButton = false;
    }

  }

  cafFormSearchValue(): void {
    console.log("search value : " + this.searchValue);
  }

  submitCafFormsData(): void {

  }

}
