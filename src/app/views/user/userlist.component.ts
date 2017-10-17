import { Component,OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';
@Component({
  templateUrl: 'userlist.component.html',
  providers:[UserlistService]
})
export class UserListComponent implements OnInit{

  userList=[];

  constructor(private userlistService:UserlistService) { }

  ngOnInit(): void {
    /*this.userlistService.get({currentPage:1}).then(res =>{
      if(res.code == 200){
        this.userList = res.data;
        console.log(this.userList);
      }
    })*/
  }

}
