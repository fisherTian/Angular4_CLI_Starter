import { NgModule } from '@angular/core';
import { AdEditComponent } from './adedit.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { AdRoutingModule } from './advertising-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
@NgModule({
  imports: [
    AdRoutingModule,CommonModule,Ng2PaginationModule,FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    AdEditComponent
  ]
})
export class AdModule { }
