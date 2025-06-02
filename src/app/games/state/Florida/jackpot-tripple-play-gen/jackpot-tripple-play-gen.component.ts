import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from 'src/app/services/number-gen.service';

@Component({
  selector: 'app-jackpot-triple-play-gen',
  templateUrl: './jackpot-tripple-play-gen.component.html',
  styleUrls: ['./jackpot-tripple-play-gen.component.scss']
})
export class JackpotTriplePlayGenComponent implements OnInit {

  jackpotSavedNumbers = [];
  showRules = false;

  constructor(public numberGenService: NumberGenService, private router: Router) {}

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['/FLGamePick']);
  }

saveJackpot() {
  const numberSet = [
    this.numberGenService.jackpotGeneratedNumber1,
    this.numberGenService.jackpotGeneratedNumber2,
    this.numberGenService.jackpotGeneratedNumber3,
    this.numberGenService.jackpotGeneratedNumber4,
    this.numberGenService.jackpotGeneratedNumber5,
    this.numberGenService.jackpotGeneratedNumber6
  ];
  const success = this.numberGenService.saveNumber('jackpot', numberSet);
  if (!success) alert('You’ve saved too many! Clear some before saving more.');
}

deleteSavedJackpot(index: number) {
  this.numberGenService.removeSavedNumber('jackpot', index);
}

GenerateJackpot() {
  this.numberGenService.jackpotTriplePlayRandomGenMaster();
  this.numberGenService.randomPhraseGen();
}

}
