import { Component, OnInit } from '@angular/core';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { ScreenPages } from '../../models/state.constants';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cardsData: Array<ScreenPages> = [];
  obj: any = {};

  constructor(){

  }


  ngOnInit(): void {

    // this.backendConnectionService.getScreenNames().subscribe(res => {
    //   if(res && res.success){
    //     this.cardsData = res.data;
    //   }
    // });


    this.cardsData = [
      {
        id: 1,
        name: "CDR's Data",
        screen_link_name: 'create-cases/cdr-data'
      },
      {
        id: 2,
        name: "Cyber Bully",
        screen_link_name: 'create-cases/cyber-bully-data'
      },
      {
        id: 3,
        name: "Suspect Data",
        screen_link_name: 'create-cases/suspect-data'
      },
      {
        id: 4,
        name: "SDR Data",
        screen_link_name: 'create-cases/sdr-data'
      },
      {
        id: 5,
        name: "CAF Forms",
        screen_link_name: 'create-cases/caf-forms-data'
      },
      {
        id: 6,
        name: "NCRP",
        screen_link_name: 'create-cases/ncrp-data'
      },
      {
        id: 7,
        name: "Suspect Acccount Details",
        screen_link_name: 'create-cases/suspect-acc-data'
      },
      {
        id: 8,
        name: "List Of CDR Data",
        screen_link_name: 'list-cases/list-of-cdr-data'
      },
      {
        id: 9,
        name: "List Of Suspect Data",
        screen_link_name: 'list-cases/list-of-suspect-data'
      },
      {
        id: 10,
        name: "List Of Suspect Account Details",
        screen_link_name: 'list-cases/list-of-suspect-ac-detials'
      },
      {
        id: 11,
        name: "List Of SDR Data",
        screen_link_name: 'list-cases/list-of-sdr-data'
      },
      {
        id: 12,
        name: "List Of NCRP Data",
        screen_link_name: 'list-cases/list-of-ncrp-data'
      },
      {
        id: 13,
        name: "List Of Cyber Bully",
        screen_link_name: 'list-cases/list-of-cyber-bully-data'
      },
      {
        id: 14,
        name: "List Of CAF Form",
        screen_link_name: 'list-cases/list-of-caf-forms-data'
      },
    ]


  }

}
