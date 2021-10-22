import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.css']
})
export class TrademarkComponent implements OnInit {

  trademark: string = "@Trademark: Hwuevos ltd. | hwuevos@hmail.com | (999) 847-2847"
  
  constructor() { }

  ngOnInit(): void {
  }

}
