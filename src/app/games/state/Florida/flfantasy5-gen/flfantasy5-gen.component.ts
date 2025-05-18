import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flfantasy5-gen',
  templateUrl: './flfantasy5-gen.component.html',
  styleUrls: ['./flfantasy5-gen.component.scss']
})
export class FLFantasy5GenComponent implements OnInit {

  fantasy5SavedNumbers = [];

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GenerateFantasy5() {
    console.log(this.numberGenService.fantasy5randomGenMaster());

  }

  saveFantasy5() {
    this.fantasy5SavedNumbers.push(
      this.numberGenService.fantasy5num1,
      this.numberGenService.fantasy5num2,
      this.numberGenService.fantasy5num3,
      this.numberGenService.fantasy5num4,
      this.numberGenService.fantasy5num5);
    console.log(this.fantasy5SavedNumbers);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }
  ngOnInit() {
  }
  showRules = false;

}
