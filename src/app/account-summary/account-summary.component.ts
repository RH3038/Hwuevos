import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Double } from 'typeorm';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  manager!: string;
  perGain!: number;
  dollGain!: number;
  reserveCap!: number;
  addedCap!: number;
  totCap!: number;
  createDate!: Date | null;
  email!: string;

  constructor() {
    this.manager = "";
    this.perGain = 0;
    this.dollGain = 0;
    this.reserveCap = 0;
    this.addedCap = 0;
    this.totCap = 0;
    this.createDate = null;
    this.email = "";
   }

  ngOnInit(): void { }

}
