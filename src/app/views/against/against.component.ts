import { Component,OnInit,Input } from '@angular/core';
import { AgainstService } from './against.service';
@Component({
  templateUrl: 'against.component.html',
  providers:[AgainstService]
})
export class AgainstComponent implements OnInit{

  againstList = [];
  page: number = 1;
  total: number;
  status:string='';

  constructor(private againstService:AgainstService) { }

  config:any = {
    inSelector:"fallDown",
    outSelector:"rollOut",
    title:"angular2 layer",
    align:"top",
    parent: this,
    closeAble: false
  }

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



}
