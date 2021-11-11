import { Injectable } from '@angular/core';
import { ILogin } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private account!: ILogin | null;
    private _url = 'http://localhost:5000/login';
    
    constructor(private _http: HttpClient) {
        this.account = null;
    }

    public getUser(data: any): Observable<any> {

        return this._http.post<any>(this._url, data);

    }

}