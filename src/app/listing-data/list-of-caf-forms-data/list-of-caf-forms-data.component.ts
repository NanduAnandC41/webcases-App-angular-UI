import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';

@Component({
  selector: 'app-list-of-caf-forms-data',
  templateUrl: './list-of-caf-forms-data.component.html',
  styleUrls: ['./list-of-caf-forms-data.component.css']
})
export class ListOfCafFormsDataComponent implements OnInit, AfterViewInit{

  dtOptions: DataTables.Settings = {};
  posts: any;
  items: any[] = [];

  constructor(private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private router: Router){

    // this.backendConnectionService.getListOfCafFormData().subscribe(res => {
    //   if(res && res.success){
    //     this.items = res.data;

    //   }
    // },
    // err => console.error(err),
    // () => console.log('Done Loading CAF Form Data'));

  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

    };


    this.backendConnectionService.getListOfCafFormData().subscribe(res => {
      if(res && res.success){
        this.items = res.data;

      }
    },
    err => console.error(err),
    () => console.log('Done Loading CAF Form Data'));


  }


  ngAfterViewInit(): void {

  }

  redirectToCyberBullyData(mobileNo: string){
    console.log(mobileNo);
    this.dataRequestService.valueAppendToTransfer(mobileNo);
    this.router.navigateByUrl('/create-cases/caf-forms-data');
  }



}
