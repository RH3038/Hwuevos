import { Component, OnInit } from '@angular/core';
import { StorageService } from '../x-services/storage.servcie';

@Component({
  selector: 'app-menubar-user',
  templateUrl: './menubar-user.component.html',
  styleUrls: ['./menubar-user.component.css']
})
export class MenubarUserComponent implements OnInit {

  user!: string;
  account!: string;

  constructor(private _storage: StorageService) { }

  ngOnInit(): void {

    this.user = this._storage.sessionGet("Login");
    this.account = this._storage.sessionGet("Account");

  }

  onClick() {

    this._storage.sessionRemove("Login");
    this._storage.sessionRemove("Account");
    this._storage.sessionSet("LoggedIn", false)

  }

}
