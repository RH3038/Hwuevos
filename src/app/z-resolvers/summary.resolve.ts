import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService, SummaryService } from "src/index";

@Injectable({ providedIn: 'root'})

export class SummaryResolver implements Resolve<any> {
    private login!: string;
    public account!: string;

    constructor(private _storage: StorageService, private _summary: SummaryService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        this.login = this._storage.sessionGet('Login');
        this.account = this._storage.sessionGet('Account');

        return this._summary.getData({"user" : this.login, 
               "stock" : route.url[1].path.toUpperCase(), "account" : this.account});

    }

}