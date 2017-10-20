import { NgModule } from "@angular/core";
import { ModalModule, BsModalService } from "ngx-bootstrap";
import {NgxCodemirrorModalService} from './ngx-codemirror-modal.service';
import {NgCodemirrorModalComponent} from './ngx-codemirror-modal.component';
import { CodeMirrorModule } from './../ngx-codemirror';
@NgModule({
  imports: [ModalModule.forRoot(),CodeMirrorModule],
  declarations: [NgCodemirrorModalComponent],
  providers: [NgxCodemirrorModalService, BsModalService],
  exports: [NgCodemirrorModalComponent]
})
export class NgCodemirrorModalModule {}
