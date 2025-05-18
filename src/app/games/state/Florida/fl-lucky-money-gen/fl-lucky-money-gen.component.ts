import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-fl-lucky-money-gen',
  templateUrl: './fl-lucky-money-gen.component.html',
  styleUrls: ['./fl-lucky-money-gen.component.scss']
})
export class FlLuckyMoneyGenComponent implements OnInit {
  luckyMoneySavedNumbers = [];

  GenerateLuckyMoney() {
    console.log(this.numberGenService.luckyMoneyRandomGenMaster());
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }

  luckyMoneyInfo() {
    this.router.navigate(['/luckyMoneyInfo']);
  }

  constructor(
    public numberGenService: NumberGenService,
    private router: Router
  ) {}

  ngOnInit() {}

    showRules = false;

}
