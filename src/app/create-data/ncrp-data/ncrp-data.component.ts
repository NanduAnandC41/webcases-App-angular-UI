import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';
import { StationNamesDTO } from '../../models/state.constants';



@Component({
  selector: 'app-ncrp-data',
  templateUrl: './ncrp-data.component.html',
  styleUrls: ['./ncrp-data.component.css']
})
export class NcrpDataComponent {
  public ncrDataForm!: FormGroup;

  complaintDetailsAccordian: boolean = false;
  suspectDetailsAccordian: boolean = false;
  transactionDetailsAccordian: boolean = false;
  replyDetailsAccordian: boolean = false;


  stationNames: StationNamesDTO[] = [];

  searchValue: string = "";
  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;

  constructor(protected formBuilder: FormBuilder,
    private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService) {

    this.backendConnectionService.getListOfStationNames().subscribe(res => {
      if (res && res.success) {
        console.log(res);
        this.stationNames = res.data;
      }
    });

    this.dataRequestService.valueTransfer.subscribe(res => {
      if (res) {
        console.log("transfer value : ", res);
      }
    });

  }

  ngOnInit(): void {

    this.ncrDataForm = this.formBuilder.group({

      uploadFile: new FormControl(),
      selectValue: new FormControl(),
      searchField: new FormControl(),

      searchValue: new FormControl(),

      crimePetitionNo: new FormControl(),
      categoryComplaint: new FormControl(),
      subCategoryComplaint: new FormControl(),
      addInformation: new FormControl(),


      userId: new FormControl(),
      incidentDateTime: new FormControl(),
      complaintDate: new FormControl(),


      complaintName: new FormControl(),
      complaintMobileNumber: new FormControl(),
      complaintGuardianName: new FormControl(),
      complaintEmailId: new FormControl(),
      complaintStreetName: new FormControl(),
      complaintHouseNo: new FormControl(),
      complaintColony: new FormControl(),
      complaintVillage: new FormControl(),
      complaintTehsil: new FormControl(),
      complaintPincode: new FormControl(),
      complaintPoliceStation: new FormControl(),
      complaintDistrict: new FormControl(),
      complaintState: new FormControl(),
      relationWithVictim: new FormControl(),


      suspectOtherInfo: new FormControl(),
      suspectHouseNo: new FormControl(),
      suspectStreet: new FormControl(),
      suspectColony: new FormControl(),
      suspectVillage: new FormControl(),
      suspectTehsil: new FormControl(),
      suspectState: new FormControl(),
      suspectDistrict: new FormControl(),
      suspectPoliceStation: new FormControl(),
      suspectPincode: new FormControl(),
      suspectComplaintAddInfo: new FormControl(),

      transactionSNo: new FormControl(),
      transactionBankWallet: new FormControl(),
      transactionMerchant: new FormControl(),
      transactionAcctNo: new FormControl(),
      transactionWalletId: new FormControl(),
      transactionCardData: new FormControl(),
      transactionAmount: new FormControl(),
      transactionReferenceNo: new FormControl(),
      transactionNo: new FormControl(),
      transactionDate: new FormControl(),
      transactionComplaintDate: new FormControl(),

      replySNo: new FormControl(),
      replyTakenBank: new FormControl(),
      replyAccntNo: new FormControl(),
      replyTransactionId: new FormControl(),
      replyAmount: new FormControl(),
      repreplyRemarkslySNo: new FormControl(),
      replyPoliceStation: new FormControl(),
      replyRemarks: new FormControl(),

      policeStation: new FormControl(),

    });



  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.ncrDataForm.value);

    if (this.ncrDataForm.value.uploadFile != "" ||
      this.ncrDataForm.value.uploadFile != null) {
      this.bulkDataButton = false;
    }

  }


  customerPhotoSelected(event: any) {
    console.log(event.target.value);
  }

  addNcrDetails() {

  }

  updateNcrSearchValue() {

  }


  bulkUploadOfNcrData() {

  }

  submitNcrpData(){

    console.log(this.ncrDataForm.value);

    if(
      (this.ncrDataForm.value.crimePetitionNo === '' ||  this.ncrDataForm.value.crimePetitionNo == null) &&
      (this.ncrDataForm.value.categoryComplaint === '' ||  this.ncrDataForm.value.categoryComplaint == null) &&
      (this.ncrDataForm.value.subCategoryComplaint === '' ||  this.ncrDataForm.value.subCategoryComplaint == null) &&
      (this.ncrDataForm.value.addInformation === '' ||  this.ncrDataForm.value.addInformation == null) &&

      (this.ncrDataForm.value.userId ==='' ||  this.ncrDataForm.value.userId == null) &&
      (this.ncrDataForm.value.incidentDateTime === '' ||  this.ncrDataForm.value.incidentDateTime == null) &&
      (this.ncrDataForm.value.complaintDate === '' ||  this.ncrDataForm.value.complaintDate == null) &&

      (this.ncrDataForm.value.complaintName === '' ||  this.ncrDataForm.value.complaintName == null) &&
      (this.ncrDataForm.value.complaintMobileNumber === '' ||  this.ncrDataForm.value.complaintMobileNumber == null) &&
      (this.ncrDataForm.value.complaintGuardianName === '' ||  this.ncrDataForm.value.complaintGuardianName == null) &&
      (this.ncrDataForm.value.complaintEmailId === '' ||  this.ncrDataForm.value.complaintEmailId == null) &&
      (this.ncrDataForm.value.complaintStreetName === '' ||  this.ncrDataForm.value.complaintStreetName == null) &&
      (this.ncrDataForm.value.complaintHouseNo ==='' ||  this.ncrDataForm.value.complaintHouseNo == null) &&
      (this.ncrDataForm.value.complaintColony === '' ||  this.ncrDataForm.value.complaintColony == null) &&
      (this.ncrDataForm.value.complaintVillage ==='' ||  this.ncrDataForm.value.complaintVillage == null) &&
      (this.ncrDataForm.value.complaintTehsil === '' ||  this.ncrDataForm.value.complaintTehsil == null) &&
      (this.ncrDataForm.value.complaintPincode === '' ||  this.ncrDataForm.value.complaintPincode == null) &&
      (this.ncrDataForm.value.complaintPoliceStation === '' ||  this.ncrDataForm.value.complaintPoliceStation == null) &&
      (this.ncrDataForm.value.complaintDistrict === '' ||  this.ncrDataForm.value.complaintDistrict == null) &&
      (this.ncrDataForm.value.complaintState === '' ||  this.ncrDataForm.value.complaintState == null) &&
      (this.ncrDataForm.value.relationWithVictim === '' ||  this.ncrDataForm.value.relationWithVictim == null) &&


      (this.ncrDataForm.value.suspectOtherInfo === '' ||  this.ncrDataForm.value.suspectOtherInfo == null) &&
      (this.ncrDataForm.value.suspectHouseNo === '' ||  this.ncrDataForm.value.suspectHouseNo == null) &&
      (this.ncrDataForm.value.suspectStreet === '' ||  this.ncrDataForm.value.suspectStreet == null) &&
      (this.ncrDataForm.value.suspectColony === '' ||  this.ncrDataForm.value.suspectColony == null) &&
      (this.ncrDataForm.value.suspectVillage === '' ||  this.ncrDataForm.value.suspectVillage == null) &&
      (this.ncrDataForm.value.suspectTehsil === '' ||  this.ncrDataForm.value.suspectTehsil == null) &&
      (this.ncrDataForm.value.suspectDistrict === '' ||  this.ncrDataForm.value.suspectDistrict == null) &&
      (this.ncrDataForm.value.suspectPoliceStation === '' ||  this.ncrDataForm.value.suspectPoliceStation == null) &&
      (this.ncrDataForm.value.suspectPincode === '' ||  this.ncrDataForm.value.suspectPincode == null) &&
      (this.ncrDataForm.value.suspectComplaintAddInfo === '' ||  this.ncrDataForm.value.suspectComplaintAddInfo == null) &&


      (this.ncrDataForm.value.transactionSNo === '' ||  this.ncrDataForm.value.transactionSNo == null) &&
      (this.ncrDataForm.value.transactionBankWallet === '' ||  this.ncrDataForm.value.transactionBankWallet == null) &&
      (this.ncrDataForm.value.transactionMerchant === '' ||  this.ncrDataForm.value.transactionMerchant == null) &&
      (this.ncrDataForm.value.transactionAcctNo === '' ||  this.ncrDataForm.value.transactionAcctNo == null) &&
      (this.ncrDataForm.value.transactionWalletId === '' ||  this.ncrDataForm.value.transactionWalletId == null) &&
      (this.ncrDataForm.value.transactionCardData === '' ||  this.ncrDataForm.value.transactionCardData == null) &&
      (this.ncrDataForm.value.transactionAmount === '' ||  this.ncrDataForm.value.transactionAmount == null) &&
      (this.ncrDataForm.value.transactionReferenceNo === '' ||  this.ncrDataForm.value.transactionReferenceNo == null) &&
      (this.ncrDataForm.value.transactionNo === '' ||  this.ncrDataForm.value.transactionNo == null) &&
      (this.ncrDataForm.value.transactionDate === '' ||  this.ncrDataForm.value.transactionDate == null) &&
      (this.ncrDataForm.value.transactionComplaintDate === '' ||  this.ncrDataForm.value.transactionComplaintDate == null) &&

      (this.ncrDataForm.value.replySNo === '' ||  this.ncrDataForm.value.replySNo == null) &&
      (this.ncrDataForm.value.replyTakenBank === '' ||  this.ncrDataForm.value.replyTakenBank == null) &&
      (this.ncrDataForm.value.replyAccntNo === '' ||  this.ncrDataForm.value.replyAccntNo == null) &&
      (this.ncrDataForm.value.replyTransactionId === '' ||  this.ncrDataForm.value.replyTransactionId == null) &&
      (this.ncrDataForm.value.replyAmount === '' ||  this.ncrDataForm.value.replyAmount == null) &&
      (this.ncrDataForm.value.repreplyRemarkslySNo === '' ||  this.ncrDataForm.value.repreplyRemarkslySNo == null) &&
      (this.ncrDataForm.value.replyPoliceStation === '' ||  this.ncrDataForm.value.replyPoliceStation == null) &&
      (this.ncrDataForm.value.replyRemarks === '' ||  this.ncrDataForm.value.replyRemarks == null)

      ){
        alert("Please provide the form values to submit");

      } else {

        let complaintPoliceStation = this.stationNames.filter((obj) => {
          return obj.stationId == this.ncrDataForm.value.complaintPoliceStation
        });

        console.log(complaintPoliceStation);

        let suspectPoliceStation = this.stationNames.filter((obj) => {
          return obj.stationId == this.ncrDataForm.value.suspectPoliceStation
        });

        console.log(suspectPoliceStation);

        let replyPoliceStation = this.stationNames.filter((obj) => {
          return obj.stationId == this.ncrDataForm.value.replyPoliceStation
        });

        console.log(replyPoliceStation);

      }


  }

}
