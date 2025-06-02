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
  const numberSet = [
    this.numberGenService.fantasy5GeneratedNumber1,
    this.numberGenService.fantasy5GeneratedNumber2,
    this.numberGenService.fantasy5GeneratedNumber3,
    this.numberGenService.fantasy5GeneratedNumber4,
    this.numberGenService.fantasy5GeneratedNumber5
  ];

  const success = this.numberGenService.saveNumber('fantasy5', numberSet);
  if (!success) {
    alert('You’ve saved too many! Post or clear before adding more.');
  }
}

deleteSavedFantasy5(index: number) {
  this.numberGenService.removeSavedNumber('fantasy5', index);
}


  constructor(public numberGenService: NumberGenService, private router: Router) { }
  ngOnInit() {
  }
  showRules = false;

}
