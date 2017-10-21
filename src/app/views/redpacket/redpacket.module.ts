import { NgModule } from '@angular/core';
import { RedpacketListComponent } from './redpacketlist.component';
import { RedpacketDetailComponent } from './redpacketdetail.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { RedpacketRoutingModule } from './redpacket-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgCodemirrorModalModule} from './../../plugin/ngx-codemirror-modal/ngx-codemirror-modal.module';
@NgModule({
  imports: [
    RedpacketRoutingModule,CommonModule,Ng2PaginationModule,FormsModule,NgCodemirrorModalModule
  ],
  declarations: [
    RedpacketListComponent,
    RedpacketDetailComponent
  ]
})
export class RedpacketModule { }
