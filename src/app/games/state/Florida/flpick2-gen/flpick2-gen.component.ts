import { Component, OnInit, EventEmitter } from '@angular/core';
// import { NumberGenService } from '../../../../services/number-gen.service'
// import { concat } from 'rxjs';
import { Router } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
// import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { NumberGenService } from '../../../../services/number-gen.service';
@Component({
  selector: 'app-flpick2-gen',
  templateUrl: './flpick2-gen.component.html',
  styleUrls: ['./flpick2-gen.component.scss'],

})
export class FLPick2GenComponent implements OnInit {

  constructor(public numberGenService: NumberGenService, private router: Router) { }
  // NumberGenService: NumberGenService
  ngOnInit() { }

  // The random numbers that get generated and defining empty lists to store multiple values in.
// tslint:disable-next-line: member-ordering
  pick2SavedNumbers: any = [];


  generatePick2() {
    console.log(this.numberGenService.pick2randomGenMaster());
  }


  saveNumber() {

    this.pick2SavedNumbers.push(this.numberGenService.pick2num1, this.numberGenService.pick2num2);
    console.log(this.pick2SavedNumbers);
    // this.pick2NumberSet = [this.pick2num1, this.pick2num2]
  }

  // addNumbers() {
  //   // this.NumberSaver.numbersPlayed()
  // }

  back() {
    this.router.navigate(['/FLGamePick']);
  }

  FLPick2RulesOdds() {
    this.router.navigate(['/FLPick2RulesOdds']);
  }

  showRules = false; // modal visibility toggle


}
























// }

// const pic2PostIt = function () { }





