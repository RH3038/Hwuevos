import { Injectable } from '@angular/core';
import { ILogin } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private account!: ILogin | null;
    private _url!: string;
    
    constructor(private _http: HttpClient) {

        this.account = null;

    }

    public validateUser(data: any): Observable<any> {

        this._url = 'http://localhost:5000/login';

        return this._http.post<any>(this._url, data);

    }
}