import { Component,OnInit,Input } from '@angular/core';
import { RedpacketDetaillistService } from './redpacketDetail.service';
import {  ActivatedRoute} from '@angular/router';
import { NgxCodemirrorModalService } from "./../../plugin/ngx-codemirror-modal/ngx-codemirror-modal.service";
@Component({
  templateUrl: 'redpacketdetail.component.html',
  providers:[RedpacketDetaillistService]
})
export class RedpacketDetailComponent implements OnInit{

  redpacketDetailList = [];
  page: number = 1;
  total: number;
  query:string;
  status:string='';
  id:number;

  constructor(private redpacketDetailService:RedpacketDetaillistService,private route:ActivatedRoute,private ngxCodemirrorModalService:NgxCodemirrorModalService ) { }

  getRedpacketDetail=function(){
    this.redpacketDetailService.get({currentPage:this.page,keyword:this.query,id:this.id,status:this.status}).then(res =>{
      if(res.code == 200){
        console.log(res);
        this.redpacketDetailList = res.data;
        this.total = res.totalItems;
        this.order = res.order;
        this.returnRecord = res.returnRecord;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getRedpacketDetail();
}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.getRedpacketDetail();
  };

  viewJson=function(json){
    let _json = "{}";
    if(json!=null)_json = JSON.stringify(JSON.parse(json),null,4);
    this.ngxCodemirrorModalService.confirm({ message: _json, onAccept: () => {

    }});
  }

}
