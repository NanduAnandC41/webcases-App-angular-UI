import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';



@Component({
  selector: 'app-list-of-ncrp-data',
  templateUrl: './list-of-ncrp-data.component.html',
  styleUrls: ['./list-of-ncrp-data.component.css']
})
export class ListOfNcrpDataComponent implements OnInit, AfterViewInit{

  dtOptions: DataTables.Settings = {};
  posts: any;
  items: any[] = [];



  constructor(private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private router: Router){

      // this.backendConnectionService.getListOfNcrpData().subscribe(res => {
      //   if(res && res.success){
      //     this.items = res.data;

      //   }
      // },
      // err => console.error(err),
      // () => console.log('Done Loading NCRP Data'));

  }


  ngOnInit(): void {


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

    };

    this.backendConnectionService.getListOfNcrpData().subscribe(res => {
      if(res && res.success){
        this.items = res.data;

      }
    },
    err => console.error(err),
    () => console.log('Done Loading NCRP Data'));


  }

  ngAfterViewInit(): void {

  }


  redirectToCdrData(crimeNo: string){
    console.log(crimeNo);
    this.dataRequestService.valueAppendToTransfer(crimeNo);
    this.router.navigateByUrl('/create-cases/ncrp-data');
  }
}
