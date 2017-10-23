import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdEditComponent } from './adedit.component';


const routes: Routes = [
  {
    path: 'edit',
    component: AdEditComponent,
    data: {
      title: '广告编辑'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule {}
