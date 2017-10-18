import { NgModule,OnInit } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularEchartsModule } from 'ngx-echarts';
import { DashBoardService } from './dashboard.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    DashboardRoutingModule,AngularEchartsModule,FormsModule
  ],
  declarations: [ DashboardComponent],
  providers:[DashBoardService]
})
export class DashboardModule{}
