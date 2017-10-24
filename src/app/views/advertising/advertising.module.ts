import { NgModule } from '@angular/core';
import { AdEditComponent } from './adedit.component';
import { AdListComponent } from './adlist.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// Components Routing
import { AdRoutingModule } from './advertising-routing.module';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { FileUploadModule } from 'ng2-file-upload';
import {NgxConfirmModule} from './../../plugin/ngx-confirm/ngx-confirm.module';
@NgModule({
  imports: [
    AdRoutingModule,CommonModule,Ng2PaginationModule,FormsModule,NgxConfirmModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FileUploadModule
  ],
  declarations: [
    AdEditComponent,AdListComponent
  ]
})
export class AdModule { }
