import { Component, OnInit, ViewChild,TemplateRef } from "@angular/core";
import { Confirm } from "./confirm.interface";
import { NgxConfirmService } from "./ngx-confirm.service";
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: "ngx-confirm",
  template: `
    <template #confirmTpl>
        <div class="modal-header">
          <h4 class="modal-title pull-left">确认框</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="confirmModalRef.hide();">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
         {{confirmValue?.message}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" (click)="accept()">确认</button>
          <button type="button" class="btn btn-danger" (click)="reject()">取消</button>
      </div>
    </template>
    `
})
export class NgConfirmComponent implements OnInit {
  public confirmModalRef: BsModalRef;
  confirmValue: Confirm;
  @ViewChild("confirmTpl") confirmTpl;

  constructor(
    private _confirmService: NgxConfirmService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    if(this._confirmService.$confirm)this._confirmService.$confirm.subscribe(confirmValue => {
      this.confirmModalRef = this.modalService.show(this.confirmTpl,{class: 'modal-sm modal-info'});
      this.confirmValue = confirmValue;
    });
  }

  ngOnDestroy(){
    this._confirmService.$confirm = null;
  }

  accept(confirmValue: Confirm) {
    this.confirmValue.onAccept();
    this.confirmModalRef.hide();
    this.confirmValue = null;
  }

  reject() {
    this.confirmValue.onReject();
    this.confirmModalRef.hide();
    /*this.confirmModal.onHidden.subscribe(()=>{
      let els = document.getElementsByTagName("bs-modal-backdrop");
      if(els && els.length>0){
        for (let i=0;i<els.length;i++){
          els[i].parentNode.removeChild(els[i]);
        }
      }
      document.getElementsByTagName("bs-modal-backdrop").length>0 && document.getElementsByTagName("bs-modal-backdrop")[0].parentNode.removeChild(document.getElementsByTagName("bs-modal-backdrop")[0])
    });*/
    this.confirmValue = null;
  }
}
