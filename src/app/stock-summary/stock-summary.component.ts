import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-summary',
  templateUrl: './stock-summary.component.html',
  styleUrls: ['./stock-summary.component.css']
})
export class StockSummaryComponent implements OnInit {

  acctName!: string;
  stock!: string;
  shares!: number;
  avgPrice!: number;
  curPrice!: number;
  cost!: number;
  perGain!: number;
  dollGain!: number;
  gainTot!: number;

  constructor() { 
    this.acctName = "";
    this.stock = "";
    this.shares = 0;
    this. avgPrice = 0;
    this.curPrice = 0;
    this. cost = 0;
    this. perGain = 0;
    this. dollGain = 0;
    this.gainTot = 0;
  }

  ngOnInit(): void {
  }

}
