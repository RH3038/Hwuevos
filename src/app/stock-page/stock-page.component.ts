import { Component, OnInit } from '@angular/core';
import { IStock, PortService, AddStockService } from 'src/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {
  stocks!: Array<IStock>;
  stock!: IStock | null;

  constructor(private router: Router, private _object: AddStockService, private port: PortService) {
    this.stocks = [];
    this.stock = null;
   }

  ngOnInit(): void {
    let ref = window.location.href.split("/").pop()?.toLowerCase();
    let sessionGet = JSON.parse(sessionStorage.getItem("Stocks" + "/" + ref) as string);
    let sessionSet: any;
    this.stock = this._object.getAccount();

    if(sessionGet == null && this.stock != null) {
      this.stocks.push(this.stock);
      sessionSet = JSON.stringify(this.stocks);
      sessionStorage.setItem("Stocks" + "/" + ref, sessionSet);
      this._object.setAccount(null);
    }
    else if(sessionGet != null && this.stock == null) {
      this.stocks = sessionGet;
    }
    else if (sessionGet != null && this.stock != null){
      this.stocks = sessionGet;
      this.stocks.push(this.stock);
      sessionSet = JSON.stringify(this.stocks);
      sessionStorage.setItem("Stocks" + "/" + ref, sessionSet);
      this._object.setAccount(null);
    }
    else { }

    this.port.setItem(window.location.pathname.split('/').pop());

  }

  navigate(stock: IStock) {
    
    this.router.navigate(['/stock-summary', (stock.stock)?.toLowerCase()]);

  }


}
