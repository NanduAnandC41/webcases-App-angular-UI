import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingDataRoutingModule } from './listing-data-routing.module';
import { ListOfCdrDataComponent } from './list-of-cdr-data/list-of-cdr-data.component';
import { ListOfSuspectDataComponent } from './list-of-suspect-data/list-of-suspect-data.component';
import { ListOfSuspectAcDetialsComponent } from './list-of-suspect-ac-detials/list-of-suspect-ac-detials.component';
import { ListOfSdrDataComponent } from './list-of-sdr-data/list-of-sdr-data.component';
import { ListOfNcrpDataComponent } from './list-of-ncrp-data/list-of-ncrp-data.component';
import { ListOfCyberBullyDataComponent } from './list-of-cyber-bully-data/list-of-cyber-bully-data.component';
import { ListOfCafFormsDataComponent } from './list-of-caf-forms-data/list-of-caf-forms-data.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    ListOfCdrDataComponent,
    ListOfSuspectDataComponent,
    ListOfSuspectAcDetialsComponent,
    ListOfSdrDataComponent,
    ListOfNcrpDataComponent,
    ListOfCyberBullyDataComponent,
    ListOfCafFormsDataComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ListingDataRoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class ListingDataModule { }
