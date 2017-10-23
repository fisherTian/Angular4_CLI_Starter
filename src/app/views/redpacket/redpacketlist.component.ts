import { Component,OnInit,Input,TemplateRef  } from '@angular/core';
import { RedpacketlistService } from './redpacketlist.service';
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  templateUrl: 'redpacketlist.component.html',
  providers:[RedpacketlistService]
})
export class RedpacketListComponent implements OnInit{

  public modalRef: BsModalRef;

  redpacketList = [];
  page: number = 1;
  total: number;
  query:string;
  url:string;

  constructor(private redpacketlistService:RedpacketlistService,private modalService:BsModalService) { }

  getRedpacketList=function(){
    this.redpacketlistService.get({currentPage:this.page,keyword:this.query}).then(res =>{
      if(res.code == 200){
        this.redpacketList = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getRedpacketList();
}

  ngOnInit(): void {
    this.getRedpacketList();
  };

  public showImg(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
