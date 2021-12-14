import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService, IStock, StockService } from "src/index";

@Injectable({ providedIn: 'root'})

export class StockResolver implements Resolve<any> {
    private login!: string;

    constructor(private _storage: StorageService, private _stock: StockService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        this.login = this._storage.sessionGet('Login');

        return this._stock.getData({"user" : this.login, "account" : route.url[1].path});

    }

}