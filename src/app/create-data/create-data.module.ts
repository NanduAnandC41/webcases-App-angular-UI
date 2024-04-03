import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateDataRoutingModule } from './create-data-routing.module';
import { CdrDataComponent } from './cdr-data/cdr-data.component';
import { CyberBullyComponent } from './cyber-bully/cyber-bully.component';
import { SuspectDataComponent } from './suspect-data/suspect-data.component';
import { SdrDataComponent } from './sdr-data/sdr-data.component';
import { CafFormsComponent } from './caf-forms/caf-forms.component';
import { NcrpDataComponent } from './ncrp-data/ncrp-data.component';
import { SuspectAccDataComponent } from './suspect-acc-data/suspect-acc-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    CdrDataComponent,
    CyberBullyComponent,
    SuspectDataComponent,
    SdrDataComponent,
    CafFormsComponent,
    NcrpDataComponent,
    SuspectAccDataComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    CreateDataRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CreateDataModule { }
