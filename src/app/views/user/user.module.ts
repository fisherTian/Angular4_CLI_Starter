import { NgModule } from '@angular/core';
import { UserListComponent } from './userlist.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { UserRoutingModule } from './user-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    UserRoutingModule,CommonModule,Ng2PaginationModule,FormsModule
  ],
  declarations: [
    UserListComponent
  ]
})
export class UserModule { }
