import { Injectable } from '@angular/core';
import { IAccount } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AddAccountService {
    private account!: IAccount | null;
    private _url = 'http://localhost:5000/add-account';
    
    constructor(private _http: HttpClient) {
        this.account = null;
    }

    public getAccount(): IAccount | null {
        return this.account;
    }

    public setAccount(acct: IAccount | null): void {

        if(acct?.name != '') {

            this.account = acct;
            
        }
        else {
            this.account = null;
            window.alert("Oops: you didn't enter an account name!");
        }

    }

    public addAccount(data: any): Observable<any> {

        return this._http.post<any>(this._url, data);

    }

}