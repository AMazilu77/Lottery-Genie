import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick3-gen',
  templateUrl: './flpick3-gen.component.html',
  styleUrls: ['./flpick3-gen.component.scss']
})
export class Flpick3GenComponent implements OnInit {
  pick3SavedNumbers: number[][] = [];
  showRules = false;

  constructor(
    public numberGenService: NumberGenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pick3SavedNumbers = this.numberGenService.getSavedNumbers('pick3');
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }

  GeneratePick3() {
    this.numberGenService.pick3randomGenMaster();
  }

  saveNumberPick3() {
    const set = [
      this.numberGenService.Pick3GeneratedNumber1,
      this.numberGenService.Pick3GeneratedNumber2,
      this.numberGenService.Pick3GeneratedNumber3
    ];

    const isDefault = set.every(num => num === 0 || num == null);
    if (isDefault) {
      alert("Generate a number first!");
      return;
    }

    const success = this.numberGenService.saveNumber('pick3', set);
    if (success) {
      this.pick3SavedNumbers = this.numberGenService.getSavedNumbers('pick3');
    } else {
      alert("Maximum of 10 saved sets reached.");
    }
  }

  deleteSavedPick3(index: number) {
    this.numberGenService.removeSavedNumber('pick3', index);
    this.pick3SavedNumbers = this.numberGenService.getSavedNumbers('pick3');
  }
}
