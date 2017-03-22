import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // 在providers中配置AuthService
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {
  username = "wangweiwei";
  password = "123abc";

  // 在构造函数中将AuthService示例注入到成员变量service中， 并将其私有化
  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  // onClick() {
  //   console.log('auth result is: ' + this.service.loginWithCredentials(this.username, this.password))
  // }

  onSubmit(formValue) {
    console.log('auth result is: ' + this.service.loginWithCredentials(formValue.login.username, formValue.login.password) )
  }
}
