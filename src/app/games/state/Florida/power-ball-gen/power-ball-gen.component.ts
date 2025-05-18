import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-power-ball-gen',
  templateUrl: './power-ball-gen.component.html',
  styleUrls: ['./power-ball-gen.component.scss']
})
export class PowerBallGenComponent implements OnInit {

  powerBall_SaveNumber = [];

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GeneratePowerBall() {
    console.log(this.numberGenService.powerBallRandomGenMaster());

  }

  savePowerBall() {
    this.powerBall_SaveNumber.push(
      this.numberGenService.powerBallnum1,
      this.numberGenService.powerBallnum2,
      this.numberGenService.powerBallnum3,
      this.numberGenService.powerBallnum4,
      this.numberGenService.powerBallnum5,
      this.numberGenService.powerBallnum6POWERBALL);
    console.log(this.powerBall_SaveNumber);
  }

  constructor(public numberGenService: NumberGenService, private router: Router) { }

  ngOnInit() {
  }

        showRules = false;


}
