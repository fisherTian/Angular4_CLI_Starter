import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RedpacketListComponent } from './redpacketlist.component';
import { RedpacketDetailComponent } from './redpacketdetail.component';

const routes: Routes = [
  {
    path: 'list',
    component: RedpacketListComponent,
    data: {
      title: '热潮包管理'
    }
  },
  {
    path: 'detail/:id',
    component: RedpacketDetailComponent,
    data: {
      title: '红包详情'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedpacketRoutingModule {}
