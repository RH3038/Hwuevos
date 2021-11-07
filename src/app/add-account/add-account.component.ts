import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAccount, AddAccountService } from 'src/index';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private router: Router, private _object: AddAccountService) { }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });

  }

  ngOnClose() {
    this.onSubmit()
  }
      
  onSubmit() {
    
    var acct: IAccount = {};
    acct.name = this.addForm.controls.name.value;
    acct.funds = +this.addForm.controls.amount.value;
    acct.percent = 0;
    acct.dollar = 0;
    acct.total = 0;
    this._object.setAccount(acct);
    this._object.addAccount(acct).subscribe()
    this.router.navigate(['/accounts-page']);
  }

}
