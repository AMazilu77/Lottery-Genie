import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberGenService } from '../../../../services/number-gen.service';

@Component({
  selector: 'app-flpick5-gen',
  templateUrl: './flpick5-gen.component.html',
  styleUrls: ['./flpick5-gen.component.scss']
})
export class Flpick5GenComponent implements OnInit {
  pick5SavedNumbers = [];

  ngOnInit() {
      this.loadSavedPick5();
  }

private loadSavedPick5(): void {
  const stored = localStorage.getItem(this.savedPick5NumbersKey);
  this.pick5SavedNumbers = stored ? JSON.parse(stored) : [];
}

  back() {
    this.router.navigate(['/FLGamePick']);
  }
  GeneratePick5() {
    console.log(this.numberGenService.pick5randomGenMaster());

  }
// public Pick5GeneratedNumber1: number = 0;
// public Pick5GeneratedNumber2: number = 0;
// public Pick5GeneratedNumber3: number = 0;
// public Pick5GeneratedNumber4: number = 0;
// public Pick5GeneratedNumber5: number = 0;

private savedPick5NumbersKey = 'savedPick5Numbers';

// public pick5randomGenMaster(): void {
//   this.Pick5GeneratedNumber1 = this.randomDigit();
//   this.Pick5GeneratedNumber2 = this.randomDigit();
//   this.Pick5GeneratedNumber3 = this.randomDigit();
//   this.Pick5GeneratedNumber4 = this.randomDigit();
//   this.Pick5GeneratedNumber5 = this.randomDigit();
// }

// private randomDigit(): number {
//   return Math.floor(Math.random() * 10); // digits 0–9
// }

public getSavedNumbers(game: string): number[][] {
  const key = this.getStorageKey(game);
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
}

public savePick5(): void {
  const set = [
    this.numberGenService.Pick5GeneratedNumber1,
    this.numberGenService.Pick5GeneratedNumber2,
    this.numberGenService.Pick5GeneratedNumber3,
    this.numberGenService.Pick5GeneratedNumber4,
    this.numberGenService.Pick5GeneratedNumber5,
  ];

  const isDefault = set.every(num => typeof num !== 'number' || num === 0);
  if (isDefault) {
    alert("Generate a number first!");
    return;
  }

  const saved = this.getSavedNumbers('pick5');
  saved.push(set);
  localStorage.setItem(this.savedPick5NumbersKey, JSON.stringify(saved));
  this.loadSavedPick5(); // refresh UI
}

public deleteSavedPick5(index: number): void {
  this.pick5SavedNumbers.splice(index, 1);
  localStorage.setItem(this.savedPick5NumbersKey, JSON.stringify(this.pick5SavedNumbers));
  this.loadSavedPick5(); // ← Refresh UI
}


private getStorageKey(game: string): string {
  switch (game) {
    case 'pick5': return this.savedPick5NumbersKey;
    // other games can be handled here if needed
    default: return '';
  }
}


  constructor(public numberGenService: NumberGenService, private router: Router) { }

  showRules = false;


}
