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

    doLogin() {
        console.log(this.nickName);
        console.log(this.password)
    }

    doRegister() {
        this.loginService.excRegister().subscribe(({ status, code }) => {
            if(code === 0) {
                alert('注册成功！');
            }
        })
    }

}
