import { Component,OnInit,Input } from '@angular/core';
import { AgainstService } from './against.service';
@Component({
  templateUrl: 'against.component.html',
  providers:[AgainstService]
})
export class AgainstComponent implements OnInit{

  userList = [];
  page: number = 1;
  total: number;
  query:string;

  constructor(private againstService:AgainstService) { }

  getUserList=function(){
    this.againstService.get({currentPage:this.page,keyword:this.query}).then(res =>{
      if(res.code == 200){
        this.userList = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getUserList();
}

  ngOnInit(): void {
    this.getUserList();
  };



}
