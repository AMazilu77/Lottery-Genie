import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { winningNumbersServiceClass } from '../../../../../services/winningNumbers.service';
import { WinningPick3NumberModel } from '../../../../winningNumber.model';

@Component({
  selector: 'app-pick3-winning-numbers',
  templateUrl: './pick3-winning-numbers.component.html',
  styleUrls: ['./pick3-winning-numbers.component.scss']
})
export class Pick3WinningNumbersComponent implements OnInit {
  isLoading = false;
  winningPick3Numbers:WinningPick3NumberModel[] = [];
  // totalPosts = 0;
  // postsPerPage = 2;
  // currentPage = 1;
  // pageSizeOptions = [1, 2, 5, 10];
  constructor(private router: Router, public WinningService: winningNumbersServiceClass) { }

   pick3MidDayWinnersDemoData = [
    {drawDate: 'Nov 22, 2020', winningNumber:'501', midDay: true, evening: false},
    {drawDate: 'Nov 21, 2020', winningNumber:'814', midDay: true, evening: false},
    {drawDate: 'Nov 20, 2020', winningNumber:'549', midDay: true, evening: false},
    {drawDate: 'Nov 19, 2020', winningNumber:'303', midDay: true, evening: false},
    {drawDate: 'Nov 18, 2020', winningNumber:'913', midDay: true, evening: false},
    {drawDate: 'Nov 17, 2020', winningNumber:'922', midDay: true, evening: false},
    {drawDate: 'Nov 16, 2020', winningNumber:'741', midDay: true, evening: false},
    {drawDate: 'Nov 15, 2020', winningNumber:'698', midDay: true, evening: false},
    {drawDate: 'Nov 14, 2020', winningNumber:'899', midDay: true, evening: false},
    {drawDate: 'Nov 13, 2020', winningNumber:'363', midDay: true, evening: false},
    {drawDate: 'Nov 12, 2020', winningNumber:'412', midDay: true, evening: false},
    {drawDate: 'Nov 11, 2020', winningNumber:'429', midDay: true, evening: false},
    {drawDate: 'Nov 10, 2020', winningNumber:'521', midDay: true, evening: false},
    {drawDate: 'Nov 09, 2020', winningNumber:'340', midDay: true, evening: false},

  ];
   pick3EveningWinnersDemoData = [
    {drawDate: 'Nov 22, 2020', winningNumber:'785', midDay: false, evening: true},
    {drawDate: 'Nov 21, 2020', winningNumber:'351', midDay: false, evening: true},
    {drawDate: 'Nov 20, 2020', winningNumber:'421', midDay: false, evening: true},
    {drawDate: 'Nov 19, 2020', winningNumber:'106', midDay: false, evening: true},
    {drawDate: 'Nov 18, 2020', winningNumber:'073', midDay: false, evening: true},
    {drawDate: 'Nov 17, 2020', winningNumber:'874', midDay: false, evening: true},
    {drawDate: 'Nov 16, 2020', winningNumber:'206', midDay: false, evening: true},
    {drawDate: 'Nov 15, 2020', winningNumber:'541', midDay: false, evening: true},
    {drawDate: 'Nov 14, 2020', winningNumber:'268', midDay: false, evening: true},
    {drawDate: 'Nov 13, 2020', winningNumber:'210', midDay: false, evening: true},
    {drawDate: 'Nov 12, 2020', winningNumber:'460', midDay: false, evening: true},
    {drawDate: 'Nov 11, 2020', winningNumber:'110', midDay: false, evening: true},
    {drawDate: 'Nov 10, 2020', winningNumber:'043', midDay: false, evening: true},
    {drawDate: 'Nov 09, 2020', winningNumber:'537', midDay: false, evening: true},

  ];

  ngOnInit() {
    // this.WinningService.getPick3Winners()
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
