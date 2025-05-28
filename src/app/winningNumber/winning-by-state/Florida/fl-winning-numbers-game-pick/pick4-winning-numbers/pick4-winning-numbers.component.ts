import { Component, OnInit } from '@angular/core';
import { WinningPick4NumberModel } from '../../../../winningNumber.model';
import { winningNumbersServiceClass } from '../../../../../../app/services/winningNumbers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick4-winning-numbers',
  templateUrl: './pick4-winning-numbers.component.html',
  styleUrls: ['./pick4-winning-numbers.component.scss']
})
export class Pick4WinningNumbersComponent implements OnInit {
  results: WinningPick4NumberModel[] = [];

  constructor(private winningService: winningNumbersServiceClass, private router: Router) {}

  ngOnInit(): void {
    this.winningService.getPick4Results().subscribe((data) => {
      this.results = data;
    });
  }

    back() {
    this.router.navigate(['/dashBoard']);
  }

}
