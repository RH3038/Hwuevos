import { Injectable } from '@angular/core';
import { IAccount, StorageService } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private accounts!: Array<IAccount>;
    private account!: IAccount | null;
    private _url!: any;
    private login!: string;
    
    constructor(private _http: HttpClient, private _storage: StorageService) {

        this.login = _storage.sessionGet("Login");

    }

    public setData(data: any): Observable<any> {
        
        this._url = 'http://localhost:5000/account';

        return this._http.post<any>(this._url, data);
  
    }

    public getData(user: any): Observable<any> {

        this._url = 'http://localhost:5000/account/data';

        return this._http.post<any>(this._url, user);

    }

    private deleteData(data: any) {

        this._url = 'http://localhost:5000/account/delete';

        this._http.delete<any>(this._url, data).subscribe();

    }

}