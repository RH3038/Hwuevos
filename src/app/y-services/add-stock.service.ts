import { Injectable } from '@angular/core';
import { IStock } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AddStockService {
    stock!: IStock | null;
    private _url = 'http://localhost:5000/add-stock';

    constructor(private _http: HttpClient) {
        this.stock = null;
    }

    public getStock(): IStock | null {
        return this.stock;
    }

    public setStock(stock: IStock | null): void {

        if(stock?.stock != '') {
            console.log("Service: " + stock);
            this.stock = stock;
        }
        else {
            this.stock = null;
            window.alert("Oops: you didn't enter an stock name!");
        }

    }

    public addStock(data: any): Observable<any> {

        return this._http.post<any>(this._url, data);

    }

}