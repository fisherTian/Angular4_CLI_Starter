import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './userlist.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      title: '用户管理'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
