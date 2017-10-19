import { NgModule } from "@angular/core";
import { ModalModule, BsModalService } from "ngx-bootstrap";
import {NgxConfirmService} from './ngx-confirm.service';
import {NgConfirmComponent} from './ngx-confirm.component';

@NgModule({
  imports: [ModalModule.forRoot()],
  declarations: [NgConfirmComponent],
  providers: [NgxConfirmService, BsModalService],
  exports: [NgConfirmComponent]
})
export class NgxConfirmModule {}
