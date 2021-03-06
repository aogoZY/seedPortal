import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { isFullScreen } from '../shared/util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    name: string;
    password: string;
    needRegister = true;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        if (isFullScreen()) {
            // alert('全面屏手机');
        }
    }

    doRegister() {
        if(!this.name || !this.password) {
            alert('输点啥呗-_-!');
            return;
        }
        const params = {
            name: this.name,
            password: this.password
        };
        this.loginService.excRegister(params).subscribe(({ code, msg }) => {
            if (code === 0) {
                alert('注册成功！可以去登录辣~');
            } else {
                alert(msg);
            }
        });
    }

    doLogin() {
        const params = {
            name: this.name,
            password: this.password
        };
        this.loginService.excLogin(params).subscribe(({ code, msg }) => {
            if (code === 0) {
                alert('登录成功！然后就啥也没有辣~');
            } else {
                alert(msg);
            }
        });
    }

}
