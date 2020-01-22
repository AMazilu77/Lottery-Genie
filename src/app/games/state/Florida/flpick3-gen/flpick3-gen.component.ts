import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick3-gen',
  templateUrl: './flpick3-gen.component.html',
  styleUrls: ['./flpick3-gen.component.scss']
})
export class Flpick3GenComponent implements OnInit {



  back() {
    this.router.navigate(['/FLGamePick']);
  }
  constructor(public numberGenService: NumberGenService, private router: Router) { }
// tslint:disable-next-line: member-ordering
  pick3SavedNumbers = [];

  FLPick3RulesOdds() {
    this.router.navigate(['/FLPick3RulesOdds']);
  }

  saveNumberPick3() {
    this.pick3SavedNumbers.push(this.numberGenService.pick3num1, this.numberGenService.pick3num2, this.numberGenService.pick3num3);
    console.log(this.pick3SavedNumbers);
  }

  GeneratePick3() {
    console.log(this.numberGenService.pick3randomGenMaster());

  }

  ngOnInit() {
  }

}
