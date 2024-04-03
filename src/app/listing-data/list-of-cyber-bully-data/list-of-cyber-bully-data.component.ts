import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { DataRequestService } from '../../services/data-request.service';



@Component({
  selector: 'app-list-of-cyber-bully-data',
  templateUrl: './list-of-cyber-bully-data.component.html',
  styleUrls: ['./list-of-cyber-bully-data.component.css']
})
export class ListOfCyberBullyDataComponent {

  dtOptions: DataTables.Settings = {};
  posts: any;
  items: any[] = [];

  constructor(private backendConnectionService: BackendConnectionService,
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private router: Router){

    this.backendConnectionService.getListOfCyberBullyData().subscribe(res => {
      if(res && res.success){
        this.items = res.data;

      }
    });

  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,

    };
  }


  redirectToCyberBullyData(mobileNo: string){
    console.log(mobileNo);
    this.dataRequestService.valueAppendToTransfer(mobileNo);
    this.router.navigateByUrl('/create-cases/cyber-bully-data');
  }



}
