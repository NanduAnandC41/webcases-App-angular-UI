export interface CardsData{
  cardName: string,
  linkName: string
}



export interface cdrInformation{
  crimeNo: number,
  aParty: string,
  bParty: string,
  dateTime: string
}


export interface ScreenPages {
  id: number;
  name: string;
  screen_link_name: string;
}


export interface Pager {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}

export interface CdrDataDTO{
  crimeNo: string;
  partyA: string;
  partyB: string;
  dateTime: string;
  duration: string;

  cellType: string;
  firstCellId: string;
  lastCellId: string;
  imeiA: string;
  imsiA: string;

  cellIdAddress: string;
  latitude: string;
  longitude: string;
  policeStation: string;
  selectValue: number;
}


export interface StationNamesDTO{
  stationId: number;
  stationName: string;
}


export interface UserCreationDTO{
  username: string;
  password: string;
  generalNo: string;
  email: string;
  plRank: string;
  psName: string;
  psId: number;
  accessPermission: boolean;
  userRole: string;
  screenName: string;
  screenId: string;
}


export interface CyberBullyDataDTO{
  fullName: string;
  sonDaughterWifeOf: string;
  dateOfBirth: string;
  fullAddress: string;
  aadharNo: string;
  mobileNo: string;
  emaiIdOfficial: string;
  emaiIdPersonal: string;
  professionJob: string;
  prevJobDetails: string;
  monthlyIncome: string;
  vehicleDetails: string;
  bankAccountDetails: string;
  panCardNo: string;
  drivingLicenseNo: string;
  passPortDetails: string;
  friendDetails: string;
  facebookDetails: string;
  twittedId: string;
  instagramId: string;
  youTubeDetails: string;
  whatsAppDetails: string;
  telegramNo: string;
  imoNo: string;
  tiktokId: string;
  heloId: string;
  previousCases: string;
  linkedInId: string;
}



export interface SuspectDataDTO{
  modeOfOperandi: string;
  firNo: string;
  secOfLaw: string;
  stationName: string;
  stationId: string;

  suspectName: string;
  fatherName: string;
  address: string;
  suspectPhoneNos: string;
  suspectImeis: string;
  suspectCaf: any;
  suspectBpartyNos: string;
  bankAcntNos: string;
  ifscs: string;
  upIds: string;

  aadharNo: string;
  rationCard: string;
  drivingLicense: string;
  vehicleDetails: string;
  panCardNo: string;
  gmailIds: string;
  faceBookIds: string;
  instagramIds: string;
  whatsAppNos: string;
  otherSocialAccnts: string;
  photosOfSuspect: any;
  caseRelatedScreenShots: any;
  suspectWebsiteAddress: string;
  dateOfArrest: string;
  previousCrimeHistory: string;
  remarks: string;
}




export interface NcrpDataDTO{
  crimePetitionNo: string;
  complaintCategory: string;
  complaintSubCategory: string;
  additionalInfo: string;
  userData: string;
  incidentDateTime: string;
  complaintDate: string;


  complaintName: string;
  complaintMobileNo: string;
  complaintGuardianName: string;
  complaintEmailId: string;
  complaintHouseNo: string;
  complaintStreetName: string;
  complaintColony: string;
  complaintVillageTown: string;
  complaintTehsil: string;
  complaintPincode: string;
  complaintStationName: string;
  complaintStationId: string;
  complaintDistrict: string;
  complaintState: string;
  complaintRelationWithVictim: string;

  suspectOtherInfo: string;
  suspectHouseNo: string;
  suspectStreetName: string;
  suspectColony: string;
  suspectVillageTown: string;
  suspectPincode: string;
  suspectTehsil: string;
  suspectStationName: string;
  suspectStationId: string;
  suspectDistrict: string;
  suspectState: string;
  suspectComplaintAddInfo: string;

  transactionSno: string;
  transactionBankWallet: string;
  transactionMerchant: string;
  transactionAccountNo: string;
  transactionWalletId: string;
  transactionCardDetails: string;
  transactionAmount: string;
  transactionReference: string;
  transactionNo: string;
  transactionDate: string;
  transactionComplaintDate: string;


  replySno: string;
  replyActionBankWallet: string;
  replyAccountNo: string;
  replyTransactionId: any;
  replyTransactionAmount: any;
  replyRemarks: string;

}




export interface SdrDataDTO{
  phoneNo: string;
  alterPhoneNo: string;
  nameOfSubscriber: string;
  dateOfBirth: string;
  guardianName: string;
  localAddress: string;
  permanentAddress: string;
  emailId: string;
  gender: string;
  nationality: string;
  profession: string;

  panNo: string;
  photoProof: any;
  cafSerialNo: string;
  idProof: any;
  subscriberStatus: string;

  connectionType: string;
  localReference: string;
  customerSignature: any;
  latitude: string;
  longitude: string;
  imsiNo: string;
  serviceProvider: string;
  connectionStatus: string;
  previousServiceInfo: string;
  previousCircle: string;

  activationDateTime: any;
  transactionId: string;
  customerPhoto: any;
  eKycAuthResponse: string;
  eKycDeclareResponse: string;
  agentAadharNo: string;
  posAuthResponse: string;
  circle: string;
  entryDate: string;

  stationName: string;
  stationId: string;
}



export interface CafFormDataDTO{
  typeOfSubscriber: string;
  allottedMobileNo: string;
  imsiNo: string;
  emailId: string;
  customerName: string;
  guardianName: string;

  dateOfBirth: string;
  gender: string;
  panCardNo: string;
  gstNo: string;
  alternatePhoneNo: string;
  mobileUsedFor: string;
  customerSignature: any;


  profession: string;
  nationality: any;
  passportNo: string;
  visaExpiry: any;
  visaType: string;
  visaNo: string;

  localCareOf: string;
  localHouseApartmentNo: string;
  localStreetAddress: any;
  localAreaLocality: string;
  localLandmark: string;
  localVillageCity: string;
  localDistrict: string;
  localState: string;
  localPinCode: string;


  permanentCareOf: any;
  permanentHouseApartmentNo: string;
  permanentStreetAddress: any;
  permanentAreaLocality: string;
  permanentLandmark: string;
  permanentVillageCity: string;
  permanentDistrict: string;
  permanentState: string;
  permanentPinCode: string;

  officeCareOf: any;
  officeHouseApartmentNo: string;
  officeStreetAddress: any;
  officeAreaLocality: string;
  officeLandmark: string;
  officeVillageCity: string;
  officeDistrict: string;
  officeState: string;
  officePinCode: string;

  proofOfIdentityType: any;
  proofOfIdentityDocumentNo: string;
  proofOfIdentityDateOfIssue: any;
  proofOfIdentityPlaceOfIssue: string;
  proofOfIdentityIssuingAuthority: string;
  proofOfIdentityFile: any;


  proofOfAddressType: any;
  proofOfAddressDocumentNo: string;
  proofOfAddressDateOfIssue: any;
  proofOfAddressPlaceOfIssue: string;
  proofOfAddressIssuingAuthority: string;
  proofOfAddressFile: any;

  othersNoOfConnections: any;
  othersViNo: string;
  othersTariffPlan: any;
  othersValueAdded: string;
  othersAddOn: string;

  stationName: string;
  stationId: string;
}


export interface SuspectAccountDTO{
  name: string;
  accountNo: string;
  phoneNo: string;
  upIds: string;
  urls: string;
  remarks: string;

  stationName: string;
  stationId: string;
}









