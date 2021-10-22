import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddAccountService, IAccount } from 'src/index';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.css']
})
export class AccountsPageComponent implements OnInit {
  accounts: Array<IAccount>;
  account!: IAccount | null;

  constructor(private router: Router, private _object: AddAccountService) {
    this.accounts = [];
    this.account = null;
   }


  ngOnInit(): void {

    let sessionGet = JSON.parse(sessionStorage.getItem("Accounts") as string);
    let sessionSet: any;
    this.account = this._object.getAccount();

    if(sessionGet == null && this.account != null) {
      this.accounts.push(this.account);
      sessionSet = JSON.stringify(this.accounts);
      sessionStorage.setItem("Accounts", sessionSet);
      this._object.setAccount(null);
    }
    else if(sessionGet != null && this.account == null) {
      this.accounts = sessionGet;
    }
    else if (sessionGet != null && this.account != null){
      this.accounts = sessionGet;
      this.accounts.push(this.account);
      sessionSet = JSON.stringify(this.accounts);
      sessionStorage.setItem("Accounts", sessionSet);
      this._object.setAccount(null);
    }
    else { }
    
  }

  navigate(account: IAccount) {

    this.router.navigate(['/stock-page', (account.name)?.toLowerCase()]);

  }




}
