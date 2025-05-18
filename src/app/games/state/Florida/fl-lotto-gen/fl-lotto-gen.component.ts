import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-fl-lotto-gen',
  templateUrl: './fl-lotto-gen.component.html',
  styleUrls: ['./fl-lotto-gen.component.scss']
})
export class FlLottoGenComponent implements OnInit {

  FL_LottoSavedNumbers = [];

   ngOnInit() {
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  FL_LottoRandomGenMaster() {
    console.log(this.numberGenService.FL_LottoRandomGenMaster());

  }

  saveFL_Lotto() {
    this.FL_LottoSavedNumbers.push(
      this.numberGenService.FL_Lottonum1,
      this.numberGenService.FL_Lottonum2,
      this.numberGenService.FL_Lottonum3,
      this.numberGenService.FL_Lottonum4,
      this.numberGenService.FL_Lottonum5,
      this.numberGenService.FL_Lottonum6);
    console.log(this.FL_LottoSavedNumbers);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }

 
  showRules = false;

}
