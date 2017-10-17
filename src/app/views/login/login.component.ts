import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import MD5 from 'md5-es';
@Component({
  templateUrl: 'login.component.html',
  providers:[LoginService]
})
export class LoginComponent {

  user = {account:'',password:''};

  constructor(private loginService:LoginService,private router:Router) { }

  login(){
    let _user = Object.assign({}, this.user);
    _user.password = MD5.hash(_user.password);
    this.loginService.login(_user).then(res =>{
      if(res.result){
          //登录成功
        sessionStorage.setItem("token",res.token);
        sessionStorage.setItem("user",JSON.stringify(res.data));
        this.router.navigate(['/dashboard']);
      }
    })
  }

}
