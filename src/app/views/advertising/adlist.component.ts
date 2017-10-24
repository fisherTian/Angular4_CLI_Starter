import { Component,OnInit,Input,TemplateRef} from '@angular/core';
import { AdListService } from './adlist.service';
import { DomSanitizer} from '@angular/platform-browser';
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { NgxConfirmService } from "./../../plugin/ngx-confirm/ngx-confirm.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  templateUrl: 'adlist.component.html',
  providers:[AdListService]
})
export class AdListComponent implements OnInit{

  adList = [];
  page: number = 1;
  total: number;
  query:string;
  status:string='';
  public picModalRef: BsModalRef;
  public previewModalRef: BsModalRef;
  url:string='';
  html;

  constructor(private adListService:AdListService,private sanitizer: DomSanitizer,private toastr:ToastrService,private modalService:BsModalService,private _ngxConfirmService: NgxConfirmService) { }

  getAdList=function(){
    this.adListService.get({currentPage:this.page,keyword:this.query,status:this.status}).then(res =>{
      if(res.code == 200){
        this.adList = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getAdList();
}

  ngOnInit(): void {
    this.getAdList();
  };

  public showImg(template: TemplateRef<any>,url) {
    this.url = url;
    this.picModalRef = this.modalService.show(template);
  }

  public preview(template: TemplateRef<any>,_html) {
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      _html);
    this.previewModalRef = this.modalService.show(template);
  }

  changeStatus = function(id,status){
    this._ngxConfirmService.confirm({ message: "确认修改状态？", onAccept: () => {
      this.adListService.updateStatus({status:status,id:id}).then(res =>{
        if(res.result){
          this.getAdList();
          this.toastr.success('修改成功!', '提示');
        }else{
          this.toastr.error('修改失败!', '提示');
        };
      })
    }, onReject: () => { }});

  }

  deleteAd = function(id){
    this._ngxConfirmService.confirm({ message: "确认删除？", onAccept: () => {
      this.adListService.deleteAd({id:id}).then(res =>{
        if(res.result){
          this.getAdList();
          this.toastr.success('删除成功!', '提示');
        }else{
          this.toastr.error('删除失败!', '提示');
        };
      })
    }, onReject: () => { }});
  }

}
