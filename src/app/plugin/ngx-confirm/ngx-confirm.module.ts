import { NgModule } from "@angular/core";
import {NgxConfirmService} from './ngx-confirm.service';
import {NgConfirmComponent} from './ngx-confirm.component';

@NgModule({
  imports: [],
  declarations: [NgConfirmComponent],
  providers: [NgxConfirmService],
  exports: [NgConfirmComponent]
})
export class NgxConfirmModule {}
