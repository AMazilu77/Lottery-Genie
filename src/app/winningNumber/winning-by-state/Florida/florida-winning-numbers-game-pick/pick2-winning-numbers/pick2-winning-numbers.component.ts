import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { winningNumbersServiceClass } from '../../../../../services/winningNumbers.service';
import { WinningPick2NumberModel } from '../../../../winningNumber.model';

@Component({
  selector: 'app-pick2-winning-numbers',
  templateUrl: './pick2-winning-numbers.component.html',
  styleUrls: ['./pick2-winning-numbers.component.scss']
})
export class Pick2WinningNumbersComponent implements OnInit {
  isLoading = false;
  winningPick2Numbers:WinningPick2NumberModel[] = [] 
  // totalPosts = 0;
  // postsPerPage = 2;
  // currentPage = 1;
  // pageSizeOptions = [1, 2, 5, 10];
  constructor(private router: Router, public WinningService: winningNumbersServiceClass) { }

   pick2MidDayWinnersDemoData = [

    {drawDate: 'Nov 16, 2020', winningNumber:'08', midDay: true, evening: false},
    {drawDate: 'Nov 15, 2020', winningNumber:'65', midDay: true, evening: false},
    {drawDate: 'Nov 14, 2020', winningNumber:'83', midDay: true, evening: false},
    {drawDate: 'Nov 13, 2020', winningNumber:'97', midDay: true, evening: false},
    {drawDate: 'Nov 12, 2020', winningNumber:'52', midDay: true, evening: false},
    {drawDate: 'Nov 11, 2020', winningNumber:'02', midDay: true, evening: false},

  ];

  ngOnInit() {
    // this.WinningService.getPick2Winners()
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
