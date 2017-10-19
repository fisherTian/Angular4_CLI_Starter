import { Component, OnInit, ViewChild } from "@angular/core";
import { Confirm } from "./confirm.interface";
import { NgxConfirmService } from "./ngx-confirm.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "ngx-confirm",
  template: `
    <div bsModal #confirmModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirmModal" aria-hidden="true">
    <div class="modal-dialog modal-info modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title pull-left">确认框</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="confirmModal.hide();">
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
      </div>
    </div>
  </div>
    `
})
export class NgConfirmComponent implements OnInit {
  confirmValue: Confirm;
  @ViewChild("confirmModal") confirmModal;

  constructor(
    private _confirmService: NgxConfirmService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this._confirmService.$confirm.subscribe(confirmValue => {
    this.confirmModal.show();
      this.confirmValue = confirmValue;
    });
  }

  accept(confirmValue: Confirm) {
    this.confirmValue.onAccept();
    this.confirmModal.hide();
    this.confirmValue = null;
  }

  reject() {
    this.confirmValue.onReject();
    this.confirmModal.hide();
    this.confirmValue = null;
  }
}
