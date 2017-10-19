import { Component,OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import { AgainstService } from './against.service';
import { ToastrService } from 'ngx-toastr';
import { NgxConfirmService } from "./../../plugin/ngx-confirm/ngx-confirm.service";
@Component({
  templateUrl: 'against.component.html',
  providers:[AgainstService]
})
export class AgainstComponent implements OnInit{

  againstList = [];
  page: number = 1;
  total: number;
  status:string='';
  /*@ViewChild('confirmModal')
  confirmModal: ElementRef;*/

  constructor(private againstService:AgainstService,private toastr:ToastrService,private _ngxConfirmService: NgxConfirmService) { }


  getAgainstList=function(){
    this.againstService.get({currentPage:this.page,status:this.status}).then(res =>{
      if(res.code == 200){
        this.againstList = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getAgainstList();
}

  ngOnInit(): void {
    this.getAgainstList();
  };

  changeStatus = function(id,status){
    console.log(11);
    this._ngxConfirmService.confirm({ message: "确认修改状态？", onAccept: () => {
      this.againstService.updateStatus({status:status,id:id}).then(res =>{
        if(res.code ==200 &&res.data){
          this.getAgainstList();
          this.toastr.success('修改成功!', '提示');
        }else{
          this.toastr.error('修改失败!', '提示');
        };
      })
    }, onReject: () => { }});

  }

}
