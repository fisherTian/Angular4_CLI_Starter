import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list.component';
import { OrderComponent } from './order.component';
import { ReturnListComponent } from './return.component';
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: '提现列表'
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: {
      title: '提现订单'
    }
  },
  {
    path: 'return',
    component: ReturnListComponent,
    data: {
      title: '返现记录'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRoutingModule {}
