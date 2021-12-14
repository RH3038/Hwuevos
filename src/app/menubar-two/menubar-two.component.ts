import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/index'

@Component({
  selector: 'app-menubar-two',
  templateUrl: './menubar-two.component.html',
  styleUrls: ['./menubar-two.component.css']
})
export class MenubarTwoComponent implements OnInit {

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