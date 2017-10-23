import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: '主页'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'user',
        loadChildren: './views/user/user.module#UserModule'
      },
      {
        path: 'against',
        loadChildren: './views/against/against.module#AgainstModule'
      },
      {
        path: 'redpacket',
        loadChildren: './views/redpacket/redpacket.module#RedpacketModule'
      },
      {
        path: 'cash',
        loadChildren: './views/cash/cash.module#CashModule'
      },
      {
        path: 'advertising',
        loadChildren: './views/advertising/advertising.module#AdModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
