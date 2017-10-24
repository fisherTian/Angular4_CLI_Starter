import { NgModule } from "@angular/core";
import {NgxCodemirrorModalService} from './ngx-codemirror-modal.service';
import {NgCodemirrorModalComponent} from './ngx-codemirror-modal.component';
import { CodeMirrorModule } from './../ngx-codemirror';
@NgModule({
  imports: [CodeMirrorModule],
  declarations: [NgCodemirrorModalComponent],
  providers: [NgxCodemirrorModalService],
  exports: [NgCodemirrorModalComponent]
})
export class NgCodemirrorModalModule {}
