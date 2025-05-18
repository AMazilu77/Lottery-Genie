import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick4-gen',
  templateUrl: './flpick4-gen.component.html',
  styleUrls: ['./flpick4-gen.component.scss']
})
export class Flpick4GenComponent implements OnInit {
  pick4SavedNumbers = [];


  ngOnInit() {
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GeneratePick4() {
    console.log(this.numberGenService.pick4randomGenMaster());

  }

  savePick4Number() {

    this.pick4SavedNumbers.push(
      this.numberGenService.pick4num1,
      this.numberGenService.pick4num2,
      this.numberGenService.pick4num3,
      this.numberGenService.pick4num4);

    console.log(this.pick4SavedNumbers);
  }

  FLPick4RulesOdds() {
    this.router.navigate(['/FLPick4RulesOdds']);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }


    showRules = false; // modal visibility toggle


}
