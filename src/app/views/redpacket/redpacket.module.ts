import { NgModule } from '@angular/core';
import { RedpacketListComponent } from './redpacketlist.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { RedpacketRoutingModule } from './redpacket-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    RedpacketRoutingModule,CommonModule,Ng2PaginationModule,FormsModule
  ],
  declarations: [
    RedpacketListComponent
  ]
})
export class RedpacketModule { }
