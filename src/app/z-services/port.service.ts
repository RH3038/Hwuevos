import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PortService {
    item: any;
    
    constructor() {
        this.item = null;
    }

    public getItem(): any {
        return this.item;
    }

    public setItem(item: any): void {
        this.item = item;
    }

}