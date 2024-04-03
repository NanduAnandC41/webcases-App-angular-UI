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
