import { Component, OnInit, ViewChild } from "@angular/core";
import { codemirrorModal } from "./ngx-codemirror-modal.interface";
import { NgxCodemirrorModalService } from "./ngx-codemirror-modal.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "ngx-codemirror-modal",
  template: `
    <div bsModal #codemirrorModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="codemirrorModal" aria-hidden="true">
    <div class="modal-dialog modal-info">
      <div class="modal-content">
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
      </div>
    </div>
  </div>
    `
})
export class NgCodemirrorModalComponent implements OnInit {
  codemirrorValue: codemirrorModal = {message:"{}",onAccept:null};
  @ViewChild("codemirrorModal") codemirrorModal;
  aa="{name:'aa'}";
  constructor(
    private _ngxCodemirrorModalService: NgxCodemirrorModalService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this._ngxCodemirrorModalService.$confirm.subscribe(codemirrorValue => {
    this.codemirrorModal.show();
      this.codemirrorModal.onShown.subscribe(()=>{
        this.codemirrorValue = codemirrorValue;
      });

    });
  }

  accept(codemirrorValue: codemirrorModal) {
    this.codemirrorValue.onAccept();
    this.codemirrorModal.hide();
  }

}
