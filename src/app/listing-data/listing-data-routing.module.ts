import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfCdrDataComponent } from './list-of-cdr-data/list-of-cdr-data.component';
import { ListOfSuspectDataComponent } from './list-of-suspect-data/list-of-suspect-data.component';
import { ListOfSuspectAcDetialsComponent } from './list-of-suspect-ac-detials/list-of-suspect-ac-detials.component';
import { ListOfSdrDataComponent } from './list-of-sdr-data/list-of-sdr-data.component';
import { ListOfNcrpDataComponent } from './list-of-ncrp-data/list-of-ncrp-data.component';
import { ListOfCyberBullyDataComponent } from './list-of-cyber-bully-data/list-of-cyber-bully-data.component';
import { ListOfCafFormsDataComponent } from './list-of-caf-forms-data/list-of-caf-forms-data.component';

const routes: Routes = [
  {path: 'list-of-cdr-data', component: ListOfCdrDataComponent},
  {path: 'list-of-suspect-data', component: ListOfSuspectDataComponent},
  {path: 'list-of-suspect-ac-detials', component: ListOfSuspectAcDetialsComponent},
  {path: 'list-of-sdr-data', component: ListOfSdrDataComponent},
  {path: 'list-of-ncrp-data', component: ListOfNcrpDataComponent},
  {path: 'list-of-cyber-bully-data', component: ListOfCyberBullyDataComponent},
  {path: 'list-of-caf-forms-data', component: ListOfCafFormsDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingDataRoutingModule { }
