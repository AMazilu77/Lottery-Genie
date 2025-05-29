import { Component, OnInit } from '@angular/core';
import { winningNumbersServiceClass } from 'src/app/services/winningNumbers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fantasy5-winners',
  templateUrl: './fantasy5-winners.component.html',
  styleUrls: ['./fantasy5-winners.component.scss']
})
export class Fantasy5WinnersComponent implements OnInit {
  results: any[] = [];

  constructor(
    private winningNumbersServiceClass: winningNumbersServiceClass,
    private location: Location
  ) {}
ngOnInit(): void {

  this.winningNumbersServiceClass.getFantasy5Results().subscribe(data => {
    this.results = data.sort((a, b) => {
      // Convert drawDate to Date objects
      const dateA = new Date(a.drawDate);
      const dateB = new Date(b.drawDate);

      // If same date, order MIDDAY first, EVENING second
      if (dateA.getTime() === dateB.getTime()) {
        return a.drawType === 'MIDDAY' ? -1 : 1;
      }

      // Otherwise sort by date descending
      return dateB.getTime() - dateA.getTime();
    });
  });
}

  back(): void {
    this.location.back();
  }
}
