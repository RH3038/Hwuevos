import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISummary, StorageService } from 'src';

@Component({
  selector: 'app-stock-summary',
  templateUrl: './stock-summary.component.html',
  styleUrls: ['./stock-summary.component.css']
})
export class StockSummaryComponent implements OnInit {

  public summary!: ISummary;
  private account!: string;

  constructor(private _active: ActivatedRoute, private _storage: StorageService) {

    this.account = this._storage.sessionGet('Account').charAt(0).toUpperCase() + 
    this._storage.sessionGet('Account').slice(1);

    this.summary = {};
    this.summaryInit();

  }

  ngOnInit(): void {

  }

  summaryInit() {

    let observ = this._active.data.subscribe((data: any) =>{
      
      let stock = data.summary[0];
  
      this.summary.acctName = this.account;
      this.summary.stock = stock.stock; 
      this.summary.shares = stock.shares;
      this.summary.avgPrice = stock.price; 
      this.summary.curPrice = 0; 
      this.summary.perGain = 0; 
      this.summary.dollGain = 0; 
      this.summary.gainTot = 0;

    });

    observ.unsubscribe();

  }

}
