import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { winningNumbersServiceClass } from '../../../services/winningNumbers.service';

@Component({
  selector: 'app-cash-for-life-winners',
  templateUrl: './cash-for-life-winners.component.html',
  styleUrls: ['./cash-for-life-winners.component.scss']
})
export class CashForLifeWinnersComponent implements OnInit {
  results: any[] = [];

  constructor(
    private winningNumbersService: winningNumbersServiceClass,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.winningNumbersService.getCashForLifeResults().subscribe(data => {
      this.results = data;
    });
  }

  back(): void {
    this.location.back();
  }
}

