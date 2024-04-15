import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';


@Component({
  selector: 'app-list-of-suspect-data',
  templateUrl: './list-of-suspect-data.component.html',
  styleUrls: ['./list-of-suspect-data.component.css']
})
export class ListOfSuspectDataComponent implements OnInit, AfterViewInit{

  dtOptions: DataTables.Settings = {};
  posts: any;
  items: any[] = [];



  constructor(private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private router: Router){

      // this.backendConnectionService.getListOfSuspectData().subscribe(res => {
      //   if(res && res.success){
      //     this.items = res.data;

      //   }
      // },
      // err => console.error(err),
      // () => console.log('Done Loading Suspect Data'));

  }


  ngOnInit(): void {


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

    };


    this.backendConnectionService.getListOfSuspectData().subscribe(res => {
      if(res && res.success){
        this.items = res.data;

      }
    },
    err => console.error(err),
    () => console.log('Done Loading Suspect Data'));


  }

  ngAfterViewInit(): void {

  }


  redirectToCdrData(firNo: string){
    console.log(firNo);
    this.dataRequestService.valueAppendToTransfer(firNo);
    this.router.navigateByUrl('/create-cases/suspect-data');
  }

}
