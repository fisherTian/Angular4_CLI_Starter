import { NgModule } from '@angular/core';
import { AgainstComponent } from './against.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { AgainstRoutingModule } from './against-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    AgainstRoutingModule,CommonModule,Ng2PaginationModule,FormsModule
  ],
  declarations: [
    AgainstComponent
  ]
})
export class AgainstModule { }
