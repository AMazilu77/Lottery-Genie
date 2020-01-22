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

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GenerateMegaMillions() {
    console.log(this.numberGenService.megaMillionsRandomGenMaster());

  }

  saveMegaMillions() {
    this.megaMillions_SaveNumber.push(
      this.numberGenService.megaMillionsnum1,
      this.numberGenService.megaMillionsnum2,
      this.numberGenService.megaMillionsnum3,
      this.numberGenService.megaMillionsnum4,
      this.numberGenService.megaMillionsnum5,
      this.numberGenService.megaMillionsMEGABALL);
    console.log(this.megaMillions_SaveNumber);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }


  ngOnInit() {
  }

}
