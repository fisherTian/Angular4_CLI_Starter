import { Component,OnInit,Input,TemplateRef } from '@angular/core';
import { ListService } from './list.service';
import { BsModalService  } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  templateUrl: 'list.component.html',
  providers:[ListService]
})
export class ListComponent implements OnInit{

  list = [];
  page: number = 1;
  total: number;
  query:string;
  cash={};
  json:string='{}';

  public detailModalRef: BsModalRef;
  public jsonModalRef: BsModalRef;

  constructor(private listService:ListService,private modalService:BsModalService) { }

  getList=function(){
    this.listService.get({currentPage:this.page,keyword:this.query}).then(res =>{
      if(res.code == 200){
        this.list = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getList();
}

  ngOnInit(): void {
    this.getList();
  };

  selectDetail(item,tpl){
    this.listService.getCashInfo(item.id).then(res =>{
      if(res.code == 200){
        this.cash = res.data;
        this.showDetail(tpl);
      }
    })
  }

  public showDetail(template: TemplateRef<any>) {
    this.detailModalRef = this.modalService.show(template,{class: 'modal-lg'});
  }

  showJson=function(json,template: TemplateRef<any>){
    this.jsonModalRef = this.modalService.show(template);
    let _json = "{}";
    if(json!=null)_json = JSON.stringify(JSON.parse(json),null,4);
    this.json = _json;
  }

}
