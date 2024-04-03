import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdrDataComponent } from './cdr-data/cdr-data.component';
import { CyberBullyComponent } from './cyber-bully/cyber-bully.component';
import { SuspectDataComponent } from './suspect-data/suspect-data.component';
import { SdrDataComponent } from './sdr-data/sdr-data.component';
import { CafFormsComponent } from './caf-forms/caf-forms.component';
import { NcrpDataComponent } from './ncrp-data/ncrp-data.component';

const routes: Routes = [
  {path: 'cdr-data', component: CdrDataComponent},
  {path: 'cyber-bully-data', component: CyberBullyComponent},
  {path: 'suspect-data', component: SuspectDataComponent},
  {path: 'sdr-data', component: SdrDataComponent},
  {path: 'caf-forms-data', component: CafFormsComponent},
  {path: 'ncrp-data', component: NcrpDataComponent},
  {path: 'suspect-acc-data', component: SuspectDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDataRoutingModule { }