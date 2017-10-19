import { NgModule } from '@angular/core';
import { AgainstComponent } from './against.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { AgainstRoutingModule } from './against-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxConfirmModule} from './../../plugin/ngx-confirm/ngx-confirm.module';
import { NgxConfirmService } from './../../plugin/ngx-confirm/ngx-confirm.service';
@NgModule({
  imports: [
    AgainstRoutingModule,CommonModule,Ng2PaginationModule,FormsModule,NgxConfirmModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AgainstComponent
  ],
  providers:[NgxConfirmService]
})
export class AgainstModule { }
