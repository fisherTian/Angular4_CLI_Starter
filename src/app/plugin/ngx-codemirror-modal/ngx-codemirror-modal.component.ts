import { Component, OnInit, ViewChild } from "@angular/core";
import { codemirrorModal } from "./ngx-codemirror-modal.interface";
import { NgxCodemirrorModalService } from "./ngx-codemirror-modal.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "ngx-codemirror-modal",
  template: `
    <template #codemirrorTpl>
        <div class="modal-header">
          <h4 class="modal-title pull-left">数据详情</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="codemirrorModal.hide();">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <textarea codemirror [content]="codemirrorValue?.message"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" (click)="accept()">确认</button>
      </div>
    </template>
    `
})
export class NgCodemirrorModalComponent implements OnInit {
  codemirrorValue: codemirrorModal = {message:"{}",onAccept:null};
  @ViewChild("codemirrorTpl") codemirrorTpl;
  public codemirrorModalRef: BsModalRef;
  constructor(
    private _ngxCodemirrorModalService: NgxCodemirrorModalService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    if(this._ngxCodemirrorModalService.$codemirror)this._ngxCodemirrorModalService.$codemirror.subscribe(codemirrorValue => {
      this.codemirrorModalRef = this.modalService.show(this.codemirrorTpl,{class: 'modal-info'});
      this.codemirrorValue = codemirrorValue;
      // this.codemirrorModal.onShown.subscribe(()=>{
      //
      // });

    });
  }

  ngOnDestroy(){
    this._ngxCodemirrorModalService.$codemirror = null;
  }

  accept(codemirrorValue: codemirrorModal) {
    this.codemirrorValue.onAccept();
    this.codemirrorModalRef.hide();
    /*this.codemirrorModal.onHidden.subscribe(()=>{
      let els = document.getElementsByTagName("bs-modal-backdrop");
      if(els && els.length>0){
        for (let i=0;i<els.length;i++){
          els[i].parentNode.removeChild(els[i]);
        }
      }
      document.getElementsByTagName("bs-modal-backdrop").length>0 && document.getElementsByTagName("bs-modal-backdrop")[0].parentNode.removeChild(document.getElementsByTagName("bs-modal-backdrop")[0])
    });*/

  }

}
