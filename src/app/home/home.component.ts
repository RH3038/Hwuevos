import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messageHead: string = "Keep Track of Your Goals!";

  message: string = 
  `Do you want to keep track of your retirement, <br>
  college, or future purchase fund? <br><br>
  
  Are you on a stock trading platform that keeps <br>
  all your investments in one pool of money? <br><br>
  
  We have a solution! We divide your pool of <br>
  money into different accounts, plus we track <br>
  the profits and losses of each account. <br><br>
  
  Managing your money has never been easier, <br>
  sign up and start investing in your future!`;

  constructor() { }

  ngOnInit(): void {

  }

}
