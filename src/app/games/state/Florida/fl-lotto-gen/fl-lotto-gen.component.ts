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

 get savedFLLottoNumbers(): number[][] {
  return this.numberGenService.getSavedNumbers('fllotto');
}

saveFLLotto() {
  const currentSet = [
    this.numberGenService.FL_LottoGeneratedNumber1,
    this.numberGenService.FL_LottoGeneratedNumber2,
    this.numberGenService.FL_LottoGeneratedNumber3,
    this.numberGenService.FL_LottoGeneratedNumber4,
    this.numberGenService.FL_LottoGeneratedNumber5,
    this.numberGenService.FL_LottoGeneratedNumber6
  ];
  this.numberGenService.saveNumber('fllotto', currentSet);
}

deleteSavedFLLotto(index: number) {
  this.numberGenService.removeSavedNumber('fllotto', index);
}
  constructor(public numberGenService: NumberGenService, private router: Router) { }

 
  showRules = false;

}
