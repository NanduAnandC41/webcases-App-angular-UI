import { Component, OnInit } from '@angular/core';
import { BackendConnectionService } from '../services/backend-connection.service';
import { ScreenPages } from '../models/state.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardsData: Array<ScreenPages> = [];
  obj: any = {};

  constructor(private backendConnectionService: BackendConnectionService) { }

  ngOnInit(): void {

    // this.backendConnectionService.getScreenNames().subscribe(res => {
    //   if(res && res.success){
    //     this.cardsData = res.data;
    //   }
    // });


    this.cardsData = [
      {
        id: 0,
        name: "CDR's Data",
        screen_link_name: 'create-cases/cdr-data'
      },
      {
        id: 0,
        name: "Cyber Bully",
        screen_link_name: 'create-cases/cyber-bully-data'
      },
      {
        id: 0,
        name: "Suspect Data",
        screen_link_name: 'create-cases/suspect-data'
      },
      {
        id: 0,
        name: "SDR Data",
        screen_link_name: 'create-cases/sdr-data'
      },
      {
        id: 0,
        name: "CAF Forms",
        screen_link_name: 'create-cases/caf-forms-data'
      },
      {
        id: 0,
        name: "NCRP",
        screen_link_name: 'create-cases/ncrp-data'
      },
      {
        id: 0,
        name: "Suspect Acccount Details",
        screen_link_name: 'create-cases/suspect-acc-data'
      },
      {
        id: 0,
        name: "List Of CDR Data",
        screen_link_name: 'list-cases/list-of-cdr-data'
      },
      {
        id: 0,
        name: "List Of Suspect Data",
        screen_link_name: 'list-cases/list-of-suspect-data'
      },
      {
        id: 0,
        name: "List Of Suspect Account Details",
        screen_link_name: 'list-cases/list-of-suspect-ac-detials'
      },
      {
        id: 0,
        name: "List Of SDR Data",
        screen_link_name: 'list-cases/list-of-sdr-data'
      },
      {
        id: 0,
        name: "List Of NCRP Data",
        screen_link_name: 'list-cases/list-of-ncrp-data'
      },
      {
        id: 0,
        name: "List Of Cyber Bully",
        screen_link_name: 'list-cases/list-of-cyber-bully-data'
      },
      {
        id: 0,
        name: "List Of CAF Form",
        screen_link_name: 'list-cases/list-of-caf-forms-data'
      },
    ]


  }


}
