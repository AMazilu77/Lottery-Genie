import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lucky-money-rules-and-odds',
  templateUrl: './lucky-money-rules-and-odds.component.html',
  styleUrls: ['./lucky-money-rules-and-odds.component.sass']
})


export class LuckyMoneyRulesAndOddsComponent implements OnInit {
  show;
  show1;
  show2;
  elseBlock;
  hidden;

  back() {
    this.router.navigate(['/luckyMoney']);
  }

  constructor(private router: Router) { }

  ngOnInit() {}
}
