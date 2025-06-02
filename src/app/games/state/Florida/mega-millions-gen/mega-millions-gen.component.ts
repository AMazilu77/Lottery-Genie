import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-mega-millions-gen',
  templateUrl: './mega-millions-gen.component.html',
  styleUrls: ['./mega-millions-gen.component.scss']
})
export class MegaMillionsGenComponent implements OnInit {

  megaMillions_SaveNumber = [];

    ngOnInit() {
  }

      showRules = false;

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GenerateMegaMillions() {
    console.log(this.numberGenService.megaMillionsRandomGenMaster());

  }

  saveMegaMillions() {
  const numSet = [
  this.numberGenService.megaMillionsGeneratedNumber1,
  this.numberGenService.megaMillionsGeneratedNumber2,
  this.numberGenService.megaMillionsGeneratedNumber3,
  this.numberGenService.megaMillionsGeneratedNumber4,
  this.numberGenService.megaMillionsGeneratedNumber5,
  this.numberGenService.megaMillionsGeneratedMEGABALL
];

this.numberGenService.saveNumber('megamillions', numSet);

  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }




deleteSavedMegaMillions(index: number) {
  this.numberGenService.removeSavedNumber('megamillions', index);
}

}
