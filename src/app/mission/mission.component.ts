import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  messageHead: string = "Here's our mission!";

  message: string = 
  `Here at Hwuevos we understand that you want to invest your money! You may also be investing for
  multiple things such as your child’s college fund, retirement, buying a home etc. So, if you’re on
  a trading platform, how do you keep track of it all inside your giant pool of money? Well, we have a
  solution for you! <br><br>

  We help you keep track of your different investments inside your large of money by tracking your
  losses and gains for each goal you have by separating them into accounts. Why do we do this you ask?
  Well, think of it like this! Your retirement account is a long-term investment so, you may buy more
  stable long-term oriented stocks to keep your retirement portfolio safe. On the other hand, your fund
  to buy a new car is a relatively short-term fund so, you may have hold stocks that are slightly riskier
  with higher returns. Though this is true, there’s no rule saying that both funds can’t share the same
  stocks. That’s where we come in! <br><br>
  
  Hwuevos aims to help non finance professionals secure their financial future and put the power back
  in their hands. We hope to one day encourage every person who wants to manage their own finance's
  to do it for themselves and give them the tools to do it!
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
