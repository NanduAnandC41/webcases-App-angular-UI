import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ScreenPages, StationNamesDTO,
  UserCreationDTO } from '../models/state.constants';
import { BackendConnectionService } from '../services/backend-connection.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public creatUserForm!: FormGroup;


  selectedRoles: string[] = [];
  stationNames: StationNamesDTO[] = [];
  filteredStationNames: StationNamesDTO[] = [];
  screenNames: Array<ScreenPages> = [];
  isRegistered = false;
  submitted = false;
  errorMessage = '';
  isSuccessful: boolean = false;
  roles: any = [
    {name:'User', id:'ROLE_USER', selected: true},
    {name:'Admin', id:'ROLE_ADMIN', selected: false},
  ]


  constructor(protected formBuilder: FormBuilder,
    private backendConnectionService:BackendConnectionService,
    private authService: AuthService) {

    this.backendConnectionService.getListOfStationNames().subscribe(res => {
      if(res && res.success){
        console.log(res);
        this.stationNames = res.data;
      }
    });

    this.backendConnectionService.getScreenNames().subscribe(res => {
      if(res && res.success){
        console.log(res);
        this.screenNames  = res.data;
      }
    });

  }

  ngOnInit(): void {

    this.creatUserForm = this.formBuilder.group({

      userName: new FormControl(),
      password: new FormControl(),
      userPhNo: new FormControl(),
      userEmailId: new FormControl(),
      userRank: new FormControl(),
      stationName: new FormControl(),
      userPassword: new FormControl(),
      stationNo: new FormControl(),
      stationContactNo: new FormControl(),
      generalNo: new FormControl(),
      screenName: new FormControl(),
      permission: new FormControl(),
      selectedRole: new FormControl()
    }
  );


  }


  filterStationNames(eve: any) {
    // console.log(eve);

    // if(typeof eve.str === 'string'){
    //   this.stationNames = this.filteredStationNames.filter(a => a.stationName.toLowerCase()
    //                                          .startsWith(str.toLowerCase()));
    // }

  }

  filterScreenNames(eve: any){

  }

  createUser(): void{
    console.log("User Form Data : ", this.creatUserForm.value);

    if(this.creatUserForm.value.userName === '' || this.creatUserForm.value.userName == null ||
      this.creatUserForm.value.userPassword === '' || this.creatUserForm.value.userPassword == null ||
      this.creatUserForm.value.generalNo === '' || this.creatUserForm.value.generalNo == null ||
      this.creatUserForm.value.userEmailId === '' || this.creatUserForm.value.userEmailId == null ||
      this.creatUserForm.value.userRank === '' || this.creatUserForm.value.userRank == null ||
      this.creatUserForm.value.stationName === '' || this.creatUserForm.value.stationName == null ||
      this.creatUserForm.value.permission === '' || this.creatUserForm.value.permission == null ||
      this.creatUserForm.value.selectedRole === '' || this.creatUserForm.value.selectedRole == null ||
      this.creatUserForm.value.screenName === '' || this.creatUserForm.value.screenName == null
    ){
        alert("Please provide mandatory fields");
    }

    var stationName = this.creatUserForm.value.stationName;
    var screenName = this.creatUserForm.value.screenName;

    let selectedStationName = this.stationNames.filter((obj) => {
      return obj.stationId == this.creatUserForm.value.stationName
    });



    let createUserObj : UserCreationDTO = {
      username: this.creatUserForm.value.userName,
      password: this.creatUserForm.value.userPassword,
      generalNo: this.creatUserForm.value.generalNo,
      email: this.creatUserForm.value.userEmailId,
      plRank: this.creatUserForm.value.userRank,
      psName: this.creatUserForm.value.stationName,
      psId: selectedStationName[0].stationId,
      accessPermission: this.creatUserForm.value.permission,
      userRole: this.creatUserForm.value.selectedRole,
      screenName: selectedStationName[0].stationName,
      screenId: this.creatUserForm.value.screenName[0]
    }

    console.log("post Obj : ", createUserObj);

    this.authService.register(createUserObj).subscribe(res => {
      console.log("User Registration Response : ", res);
      if(res && res.success){
        console.log(res);
        alert(res);
      }
    });

  }

}
