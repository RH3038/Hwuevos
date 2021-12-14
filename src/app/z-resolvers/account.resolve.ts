import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService, AccountService } from "src/index";

@Injectable({ providedIn: 'root'})

export class AccountResolver implements Resolve<any> {

    private login!: string;

    constructor(private _storage: StorageService, private _account: AccountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        this.login = this._storage.sessionGet('Login');

        return this._account.getData({"user" : this.login});

    }

}