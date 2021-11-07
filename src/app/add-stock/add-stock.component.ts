import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IStock, AddStockService, PortService } from 'src/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  addForm!: FormGroup;
  acctName!: any;

  constructor(private router: Router, private _object: AddStockService, private port: PortService) {}

  ngOnInit(): void {

    this.addForm = new FormGroup({
      stock: new FormControl('', Validators.required),
      shares: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });

  }

  onSubmit() {
    var stock: IStock = {};
    let account: any = this.port.getItem();

    stock.account = account[0].toUpperCase() 
      + account.slice(1).toLowerCase();
    stock.stock = this.addForm.controls.stock.value;
    stock.shares = +this.addForm.controls.shares.value;
    stock.price = +this.addForm.controls.price.value;
    stock.date = new Date();
    stock.average = +this.addForm.controls.price.value;
    stock.total = +(this.addForm.controls.price.value * 
      this.addForm.controls.shares.value).toFixed(2);

    this._object.setStock(stock);

    this._object.addStock({
      'account': stock?.account, 'stock': stock?.stock,
      'shares': stock?.shares, 'price': stock?.price,
      'date': stock?.date, 'average': stock?.average,
      'total': stock?.total
    }).subscribe();

    this.router.navigate([window.history.back()]);
  }

}
