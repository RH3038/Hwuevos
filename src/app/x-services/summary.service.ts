import { Injectable } from '@angular/core';
import { IAccount, StorageService } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class SummaryService {
    private stock!: any;
    private _url!: any;
    private login!: string;
    
    constructor(private _http: HttpClient, private _storage: StorageService) {

        this.login = _storage.sessionGet("Login");

    }

    public getData(data: any) {

        this._url = 'http://localhost:5000/summary/data';

        return this._http.post<any>(this._url, data);

    }

}