import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-power-ball-gen',
  templateUrl: './power-ball-gen.component.html',
  styleUrls: ['./power-ball-gen.component.scss']
})
export class PowerBallGenComponent implements OnInit {
  constructor(public numberGenService: NumberGenService, private router: Router) { }
  
  showRules = false;
  powerBall_SaveNumber = [];

   ngOnInit() {
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }

  GeneratePowerBall() {
    console.log(this.numberGenService.powerBallRandomGenMaster());

  }


savePowerBall() {
  const numSet = [
    this.numberGenService.powerBallGeneratedNumber1,
    this.numberGenService.powerBallGeneratedNumber2,
    this.numberGenService.powerBallGeneratedNumber3,
    this.numberGenService.powerBallGeneratedNumber4,
    this.numberGenService.powerBallGeneratedNumber5,
    this.numberGenService.powerBallGeneratedNumber6POWERBALL
  ];

  const success = this.numberGenService.saveNumber('powerball', numSet);

  if (!success) {
    alert('You’ve saved too many! Post or clear before adding more.');
  } else {
    console.log('Saved PowerBall numbers:', numSet);
  }
}

  deleteSavedPowerball(index: number) {
    this.numberGenService.removeSavedNumber('powerball', index);
  }
}
