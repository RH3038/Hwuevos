import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAccount, AccountService, StorageService } from 'src/index';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  addForm!: FormGroup;
  user!: string;

  constructor(private _router: Router, private _account: AccountService,
    private _storage: StorageService) { 

      this.user = _storage.sessionGet("Login");

    }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });

  }

  onSubmit() {

    let result = this.session()
    result.subscribe((data: any) => {
      
      if(data == true) {

        this._router.navigate(['/accounts-page', this.user.toLowerCase()]);

      }
      else {
 
      }
      
    });

  }

  account(): IAccount {
    var acct: IAccount = {};

    acct.user = JSON.parse(sessionStorage.getItem("Login") as string);
    acct.account = this.addForm.controls.name.value;
    acct.funds = +this.addForm.controls.amount.value;
    acct.percent = 0;
    acct.dollar = 0;
    acct.total = +this.addForm.controls.amount.value;

    return acct;

  }

  session(): any {

    return this._account.setData(this.account());

  }

}
