import { Component,OnInit,Input } from '@angular/core';
import { ReturnListService } from './return.service';
@Component({
  templateUrl: 'return.component.html',
  providers:[ReturnListService]
})
export class ReturnListComponent implements OnInit{

  returnList = [];
  page: number = 1;
  total: number;
  query:string;

  constructor(private returnService:ReturnListService) { }

  getReturnList=function(){
    this.returnService.get({currentPage:this.page,keyword:this.query}).then(res =>{
      if(res.code == 200){
        this.returnList = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getReturnList();
}

  ngOnInit(): void {
    this.getReturnList();
  };



}
