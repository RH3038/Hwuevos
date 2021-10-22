import { Injectable } from '@angular/core';
import { IAccount } from 'src/index';

@Injectable({
    providedIn: 'root'
})
export class AddAccountService {
    account!: IAccount | null;
    
    constructor() {
        this.account = null;
    }

    public getAccount(): IAccount | null {
        return this.account;
    }

    public setAccount(acct: IAccount | null): void {

        if(acct?.name != '') {
            console.log("Service" + acct);
            this.account = acct;
        }
        else {
            this.account = null;
            window.alert("Oops: you didn't enter an account name!");
        }

    }

}