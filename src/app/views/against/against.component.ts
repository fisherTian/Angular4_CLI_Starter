import { Component,OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import { AgainstService } from './against.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  templateUrl: 'against.component.html',
  providers:[AgainstService]
})
export class AgainstComponent implements OnInit{

  againstList = [];
  page: number = 1;
  total: number;
  status:string='';
  @ViewChild('confirmModal')
  confirmModal: ElementRef;
  selectedItem;

  constructor(private againstService:AgainstService,private toastr:ToastrService) { }


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

  changeStatus = function(){
    this.againstService.updateStatus({status:this.selectedItem.status == '00'?'01':'00',id:this.selectedItem.id}).then(res =>{
      if(res.code ==200 &&res.data){
        this.getAgainstList();
        this.toastr.success('修改成功!', '提示');
      }else{
        this.toastr.error('修改失败!', '提示');
      };
    })
  }

}
