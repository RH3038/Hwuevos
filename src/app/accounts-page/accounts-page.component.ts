import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, IAccount, StorageService } from 'src/index';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.css']
})
export class AccountsPageComponent implements OnInit {
  accounts!: Array<IAccount>;
  account!: IAccount;

  constructor(private _router: Router, private _account: AccountService,
    public _storage: StorageService, private _active: ActivatedRoute) {
      
      this._active.data.subscribe(data => { this.accounts = data.accounts; });

  }

  ngOnInit(): void {
    

  }

  navigate(account: IAccount) {

    this._router.navigate(['/stock-page', (account.account)?.toLowerCase()]);

  }

}
