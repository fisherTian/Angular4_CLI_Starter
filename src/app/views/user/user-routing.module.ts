import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './userlist.component';
;

const routes: Routes = [
  {
    path: '',
    data: {
      title: '用户管理'
    },
    children: [
      {
        path: 'list',
        component: UserListComponent,
        data: {
          title: '用户列表'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
