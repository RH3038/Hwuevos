import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'src/index';
import { LoginService } from '../y-services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private _login: LoginService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {

    var login: ILogin = {}
    login.email = this.loginForm.controls.userName.value;
    login.password = this.loginForm.controls.password.value;
    console.log(login);
    this._login.getUser(login).subscribe();

    //this.loginForm.reset();
  }

}
