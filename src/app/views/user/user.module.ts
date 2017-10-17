import { NgModule } from '@angular/core';
import { UserListComponent } from './userlist.component';

// Components Routing
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    UserRoutingModule
  ],
  declarations: [
    UserListComponent
  ]
})
export class UserModule { }
