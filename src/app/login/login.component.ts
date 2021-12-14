import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, StorageService, AccountService,
         StockService, LoginService } from 'src/index';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private _login: LoginService, private _storage: StorageService,
    private _router: Router, private _account: AccountService,
    private _stock: StockService) {

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

    this._login.validateUser(login).subscribe(data => {

      if(data == true) {

        this._storage.sessionSet("Login", login.email);
        this._storage.sessionSet("LoggedIn", true);
        this._router.navigate(['/accounts-page', login.email?.toLowerCase()]);

      }
      else {

        window.alert("Sorry: the password you entered is incorrect!");

        this.loginForm.reset();

      }
      
    });

  }

}

