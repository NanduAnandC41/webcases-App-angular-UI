import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';



@Component({
  selector: 'app-list-of-sdr-data',
  templateUrl: './list-of-sdr-data.component.html',
  styleUrls: ['./list-of-sdr-data.component.css']
})
export class ListOfSdrDataComponent implements OnInit, AfterViewInit{

  dtOptions: DataTables.Settings = {};
  posts: any;
  items: any[] = [];



  constructor(private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private router: Router){

      // this.backendConnectionService.getListOfSdrData().subscribe(res => {
      //   if(res && res.success){
      //     this.items = res.data;

      //   }
      // },
      // err => console.error(err),
      // () => console.log('Done Loading SDR Data'));

  }


  ngOnInit(): void {


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

    };


    this.backendConnectionService.getListOfSdrData().subscribe(res => {
      if(res && res.success){
        this.items = res.data;

      }
    },
    err => console.error(err),
    () => console.log('Done Loading SDR Data'));


  }

  ngAfterViewInit(): void {

  }


  redirectToCdrData(mobileNo: string){
    console.log(mobileNo);
    this.dataRequestService.valueAppendToTransfer(mobileNo);
    this.router.navigateByUrl('/create-cases/sdr-data');
  }

}
