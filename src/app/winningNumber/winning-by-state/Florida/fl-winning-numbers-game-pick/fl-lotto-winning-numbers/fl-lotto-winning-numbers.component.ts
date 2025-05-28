import { Component, OnInit } from '@angular/core';
import { winningNumbersServiceClass } from '../../../../../services/winningNumbers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fl-lotto-winning-numbers',
  templateUrl: './fl-lotto-winning-numbers.component.html',
  styleUrls: ['./fl-lotto-winning-numbers.component.scss']
})
export class FlLottoWinningNumbersComponent implements OnInit {
  results: any[] = [];

  constructor(private winningService: winningNumbersServiceClass, private router: Router) {}

  ngOnInit(): void {
    this.winningService.getFloridaLottoResults().subscribe((data) => {
      this.results = data;
    });
  }

   back() {
    this.router.navigate(['/dashBoard']);
  }
}
