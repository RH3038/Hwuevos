import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService<T> {
    item: T | null;
    
    constructor() {
        this.item = null;
    }

    public getItem(): T | null {
        return this.item;
    }

    public setItem(item: T): void {
        this.item = item;
    }

}