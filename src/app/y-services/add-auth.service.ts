import { Injectable } from '@angular/core';
import { IAuth } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AddAuthService {
    userName!: IAuth | null;
    private _url = 'http://localhost:5000/add-auth';

    constructor(private _http: HttpClient) {
        this.userName = null;
    }

    public getAuth(): IAuth | null {
        return this.userName;
    }

    public setAuth(userName: IAuth | null): void {

        if(userName?.login != '') {
            console.log("Service: " + this.userName);
            this.userName = userName;
        }
        else {
            this.userName = null;
            window.alert("Oops: you didn't complete your registration!");
        }

    }

    public addAuth(data: any): Observable<any> {

        return this._http.post<any>(this._url, data);

    }

}