import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IStock, StockService, PortService,
         StorageService } from 'src/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  public addForm!: FormGroup;
  private account!: string;
  private user!: string;

  constructor(private router: Router, private _stock: StockService, 
    private port: PortService, public _storage: StorageService) {

    }

  ngOnInit(): void {
    this.account = this._storage.sessionGet("account");
    this.user = this._storage.sessionGet("Login");

    this.addForm = new FormGroup({
      stock: new FormControl('', Validators.required),
      shares: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });

  }

  onSubmit() {

    this.session();

  }

  stock(): IStock {

    var stock: IStock = {};

    stock.user = this.user;
    stock.account = this._storage.sessionGet("account");
    stock.stock = this.addForm.controls.stock.value;
    stock.shares = this.addForm.controls.shares.value;
    stock.price = this.addForm.controls.price.value;
    stock.cost = this.addForm.controls.price.value;
    stock.date = new Date();
    stock.average = this.addForm.controls.price.value;
    stock.total = this.addForm.controls.shares.value * 
                  this.addForm.controls.price.value;

    return stock;

  }

  session() {

    this._stock.setData(this.stock())
    .subscribe((data: any) => {

      if(data == true) {

        this.router.navigate(['/stock-page', this.account]);

      }
      else {

      }

    });

  }

}
