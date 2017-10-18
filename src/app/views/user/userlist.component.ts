import { Component,OnInit,Input } from '@angular/core';
import { UserlistService } from './userlist.service';
@Component({
  templateUrl: 'userlist.component.html',
  providers:[UserlistService]
})
export class UserListComponent implements OnInit{

  userList = [];
  page: number = 1;
  total: number;
  query:string;

  constructor(private userlistService:UserlistService) { }

  getUserList=function(){
    this.userlistService.get({currentPage:this.page,keyword:this.query}).then(res =>{
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
