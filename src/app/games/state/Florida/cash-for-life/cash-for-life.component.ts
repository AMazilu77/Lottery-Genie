import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';


@Component({
  selector: 'app-cash-for-life',
  templateUrl: './cash-for-life.component.html',
  styleUrls: ['./cash-for-life.component.scss']
})
export class CashForLifeComponent implements OnInit {
  cashForLifeSavedNumbers = [];

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GenerateCashForLife() {
    console.log(this.numberGenService.cashForLifeRandomGenMaster());

  }

  saveCashForLifeNumber() {
    this.cashForLifeSavedNumbers.push(
      this.numberGenService.cashForLifenum1,
      this.numberGenService.cashForLifenum2,
      this.numberGenService.cashForLifenum3,
      this.numberGenService.cashForLifenum4,
      this.numberGenService.cashForLifenum5);
    console.log(this.cashForLifeSavedNumbers);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }

  ngOnInit() {
  }

    showRules = false;

}
