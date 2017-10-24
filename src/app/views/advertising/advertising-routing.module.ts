import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdEditComponent } from './adedit.component';
import { AdListComponent } from './adlist.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: AdEditComponent,
    data: {
      title: '广告编辑'
    }
  },
  {
    path: 'list',
    component: AdListComponent,
    data: {
      title: '广告列表'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule {}
