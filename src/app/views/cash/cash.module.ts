import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { OrderComponent } from './order.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { CashRoutingModule } from './cash-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeMirrorModule } from './../../plugin/ngx-codemirror';
import {NgCodemirrorModalModule} from './../../plugin/ngx-codemirror-modal/ngx-codemirror-modal.module';
import { ReturnListComponent } from './return.component';
@NgModule({
  imports: [
    CashRoutingModule,CommonModule,Ng2PaginationModule,FormsModule,CodeMirrorModule,NgCodemirrorModalModule
  ],
  declarations: [
    ListComponent,OrderComponent,ReturnListComponent
  ]
})
export class CashModule { }
