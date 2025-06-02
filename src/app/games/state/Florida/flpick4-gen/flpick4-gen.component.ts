import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick4-gen',
  templateUrl: './flpick4-gen.component.html',
  styleUrls: ['./flpick4-gen.component.scss']
})
export class Flpick4GenComponent implements OnInit {
  pick4SavedNumbers: number[][] = [];

  showRules = false;

  constructor(
    public numberGenService: NumberGenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pick4SavedNumbers = this.numberGenService.getSavedNumbers('pick4');
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }

  savePick4Number() {
    const set = [
      this.numberGenService.Pick4GeneratedNumber1,
      this.numberGenService.Pick4GeneratedNumber2,
      this.numberGenService.Pick4GeneratedNumber3,
      this.numberGenService.Pick4GeneratedNumber4,
    ];

    const isDefault = set.every(num => num === 0 || num == null);
    if (isDefault) {
      alert("Generate a number first!");
      return;
    }

    const success = this.numberGenService.saveNumber('pick4', set);
    if (success) {
      this.pick4SavedNumbers = this.numberGenService.getSavedNumbers('pick4');
    } else {
      alert("Maximum of 10 saved sets reached.");
    }
  }

  deleteSavedPick4(index: number) {
    this.numberGenService.removeSavedNumber('pick4', index);
    this.pick4SavedNumbers = this.numberGenService.getSavedNumbers('pick4');
  }
}
