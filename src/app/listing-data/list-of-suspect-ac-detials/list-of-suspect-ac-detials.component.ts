import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';


@Component({
  selector: 'app-list-of-suspect-ac-detials',
  templateUrl: './list-of-suspect-ac-detials.component.html',
  styleUrls: ['./list-of-suspect-ac-detials.component.css']
})
export class ListOfSuspectAcDetialsComponent implements OnInit, AfterViewInit{

  dtOptions: DataTables.Settings = {};
  posts: any;
  items: any[] = [];



  constructor(private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private router: Router){

      // this.backendConnectionService.getListOfSuspectAccntData().subscribe(res => {
      //   if(res && res.success){
      //     this.items = res.data;

      //   }
      // },
      // err => console.error(err),
      // () => console.log('Done Loading Suspect Account Data'));

  }


  ngOnInit(): void {


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

    };



    this.backendConnectionService.getListOfSuspectAccntData().subscribe(res => {
      if(res && res.success){
        this.items = res.data;

      }
    },
    err => console.error(err),
    () => console.log('Done Loading Suspect Account Data'));


  }

  ngAfterViewInit(): void {

  }


  redirectToCdrData(phoneNo: string){
    console.log(phoneNo);
    this.dataRequestService.valueAppendToTransfer(phoneNo);
    this.router.navigateByUrl('/create-cases/suspect-acc-data');
  }

}
