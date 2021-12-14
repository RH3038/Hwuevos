import { Component, OnInit } from '@angular/core';
import { IStock, PortService, StockService, StorageService } from 'src/index';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {

  public stocks!: Array<IStock>;
  private stock!: IStock;

  constructor(private router: Router, private _object: StockService, 
    private _active: ActivatedRoute, private _storage: StorageService) {

      this._active.data.subscribe(data => { this.stocks = data.stocks });

  }

  ngOnInit(): void {

    this._storage.sessionSet("Account", this.router.url.split('/')[2]);

  }

  navigate(stock: IStock) {

    this.router.navigate(['/stock-summary', (stock.stock)?.toLowerCase()]);

  }


}
