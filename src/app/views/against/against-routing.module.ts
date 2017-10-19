import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AgainstComponent } from './against.component';


const routes: Routes = [
  {
    path: '',
    component: AgainstComponent,
    data: {
      title: '举报管理'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgainstRoutingModule {}
