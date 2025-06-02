import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick2-gen',
  templateUrl: './flpick2-gen.component.html',
  styleUrls: ['./flpick2-gen.component.scss'],
})
export class FLPick2GenComponent implements OnInit {
  pick2SavedNumbers: number[][] = [];
  showRules = false;

  constructor(public numberGenService: NumberGenService, private router: Router) {}

  ngOnInit() {
    this.pick2SavedNumbers = this.numberGenService.getSavedNumbers('pick2');
  }

  back() {
    this.router.navigate(['/FLGamePick']);
  }

  saveNumber() {
    const set = [
      this.numberGenService.Pick2GeneratedNumber1,
      this.numberGenService.Pick2GeneratedNumber2
    ];
    const isDefault = set.every(num => num === 0 || num == null);
    if (isDefault) {
      alert("Generate a number first!");
      return;
    }
    const success = this.numberGenService.saveNumber('pick2', set);
    if (success) {
      this.pick2SavedNumbers = this.numberGenService.getSavedNumbers('pick2');
    } else {
      alert("Maximum of 10 saved sets reached.");
    }
  }

  deleteSavedPick2(index: number) {
    this.numberGenService.removeSavedNumber('pick2', index);
    this.pick2SavedNumbers = this.numberGenService.getSavedNumbers('pick2');
  }
}