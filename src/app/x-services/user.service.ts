import { Injectable } from '@angular/core';
import { IUser } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AddUserService {
    private user!: IUser | null;
    private _url!: string;
    
    constructor(private _http: HttpClient) {
        this.user = null;
    }

    public getUser(): IUser | null {
        return this.user;
    }

    public setUser(user: IUser | null): void {

        if(user?.first != '') {

            this.user = user;
            
        }
        else {
            this.user = null;
            window.alert("Oops: you didn't finish your registration!");
        }

    }

    public addUser(data: any): Observable<any> {
        
        this._url = 'http://localhost:5000/user';

        return this._http.post<any>(this._url, data);

    }

}