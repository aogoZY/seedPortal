import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    nickName: string;
    password: string;
    needRegister = true;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
    }

    doRegister() {
        const params = {
            nickName: this.nickName,
            password: this.password
        };
        this.loginService.excRegister(params).subscribe(({ code, msg }) => {
            if (code === 0) {
                alert('注册成功！');
            } else {
                alert(msg);
            }
        });
    }

    doLogin() {
        const params = {
            nickName: this.nickName,
            password: this.password
        };
        this.loginService.excLogin(params).subscribe(({ code, msg }) => {
            if (code === 0) {
                alert('登录成功！');
            } else {
                alert(msg);
            }
        });
    }

}
