import { Injectable } from '@angular/core';
import { IStock } from 'src/index';

@Injectable({
    providedIn: 'root'
})
export class AddStockService {
    stock!: IStock | null;
    
    constructor() {
        this.stock = null;
    }

    public getAccount(): IStock | null {
        return this.stock;
    }

    public setAccount(stock: IStock | null): void {

        if(stock?.stock != '') {
            console.log("Service: " + stock);
            this.stock = stock;
        }
        else {
            this.stock = null;
            window.alert("Oops: you didn't enter an stock name!");
        }

    }

}