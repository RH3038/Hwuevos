import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  messageHead: string = "Help us stay active!";

  message: string = 
  `Hwuevos needs your help to stay active 
  and succeed at accomplishing our mission! <br><br>
  
  If you believe in our mission and would like
  To help us succeed please donate. Any 
  amount helps our cause.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
