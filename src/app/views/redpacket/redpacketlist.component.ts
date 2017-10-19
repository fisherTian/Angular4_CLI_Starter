import { Component,OnInit,Input } from '@angular/core';
import { RedpacketlistService } from './redpacketlist.service';
@Component({
  templateUrl: 'redpacketlist.component.html',
  providers:[RedpacketlistService]
})
export class RedpacketListComponent implements OnInit{

  redpacketList = [];
  page: number = 1;
  total: number;
  query:string;

  constructor(private redpacketlistService:RedpacketlistService) { }

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



}
