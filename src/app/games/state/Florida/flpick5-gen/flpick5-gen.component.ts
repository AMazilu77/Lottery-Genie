import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick5-gen',
  templateUrl: './flpick5-gen.component.html',
  styleUrls: ['./flpick5-gen.component.scss']
})
export class Flpick5GenComponent implements OnInit {
  pick5SavedNumbers = [];

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GeneratePick5() {
    console.log(this.numberGenService.pick5randomGenMaster());

  }

  savePick5Number() {
    this.pick5SavedNumbers.push(
      this.numberGenService.pick5num1,
      this.numberGenService.pick5num2,
      this.numberGenService.pick5num3,
      this.numberGenService.pick5num4,
      this.numberGenService.pick5num5);
    console.log(this.pick5SavedNumbers);
  }

  FLPick5RulesOdds() {
    this.router.navigate(['/FLPick5RulesOdds']);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }

  ngOnInit() {
  }

}
