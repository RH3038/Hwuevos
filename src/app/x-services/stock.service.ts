import { Injectable } from '@angular/core';
import { IStock, StorageService } from 'src/index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StockService {
    private stocks!: Array<IStock>;
    private stock!: IStock | null;
    private _url!: string;

    constructor(private _http: HttpClient, private _storage: StorageService) {
        this.stock = null;
    }

    public setStock(data: IStock): void {

        this.stock = data;

        this.stocks.push(this.stock);

    }
    
    public deleteStock(data: any): Array<IStock> {

        for(var i = 0; i < this.stocks.length; i++) {

            if(this.stocks[i].stock == data) {

                this.stocks.splice(i, 1);

            }
            else {

            }

        }

        this.deleteData(data);

        return this.stocks;

    }

    public getStocks(): Array<IStock>{

        return this.stocks;

    }

    public setStocks(stock: Array<IStock> ): void {

        this.stocks = stock;

    }

    public setData(data: any): Observable<any> {

        this._url = 'http://localhost:5000/stock';

        return this._http.post<any>(this._url, data);
  
    }

    public getData(user: any): Observable<any> {

        this._url = 'http://localhost:5000/stock/data';

        return this._http.post<any>(this._url, user);

    }

    private deleteData(data: any): Observable<any> {

        this._url = 'http://localhost:5000/stock/delete';

        return this._http.delete<any>(this._url, data);

    }

}