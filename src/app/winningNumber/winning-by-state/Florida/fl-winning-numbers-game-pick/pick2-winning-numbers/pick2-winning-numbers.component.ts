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
  winningPick2Numbers:WinningPick2NumberModel[] = [];
  // totalPosts = 0;
  // postsPerPage = 2;
  // currentPage = 1;
  // pageSizeOptions = [1, 2, 5, 10];
  constructor(private router: Router, public WinningService: winningNumbersServiceClass) { }

   pick2MidDayWinnersDemoData = [

    {drawDate: 'Nov 17, 2020', winningNumber:'79', midDay: true, evening: false},
    {drawDate: 'Nov 16, 2020', winningNumber:'08', midDay: true, evening: false},
    {drawDate: 'Nov 15, 2020', winningNumber:'65', midDay: true, evening: false},
    {drawDate: 'Nov 14, 2020', winningNumber:'83', midDay: true, evening: false},
    {drawDate: 'Nov 13, 2020', winningNumber:'97', midDay: true, evening: false},
    {drawDate: 'Nov 12, 2020', winningNumber:'52', midDay: true, evening: false},
    {drawDate: 'Nov 11, 2020', winningNumber:'02', midDay: true, evening: false},
    {drawDate: 'Nov 10, 2020', winningNumber:'17', midDay: true, evening: false},
    {drawDate: 'Nov 09, 2020', winningNumber:'64', midDay: true, evening: false},
    {drawDate: 'Nov 08, 2020', winningNumber:'17', midDay: true, evening: false},
    {drawDate: 'Nov 07, 2020', winningNumber:'17', midDay: true, evening: false},
    {drawDate: 'Nov 06, 2020', winningNumber:'77', midDay: true, evening: false},
    {drawDate: 'Nov 05, 2020', winningNumber:'11', midDay: true, evening: false},
    {drawDate: 'Nov 04, 2020', winningNumber:'08', midDay: true, evening: false},
    {drawDate: 'Nov 03, 2020', winningNumber:'81', midDay: true, evening: false},
    {drawDate: 'Nov 02, 2020', winningNumber:'40', midDay: true, evening: false},
    {drawDate: 'Nov 01, 2020', winningNumber:'72', midDay: true, evening: false},

  ];
   pick2EveningWinnersDemoData = [
    // {drawDate: 'Nov 21, 2020', winningNumber:'08', midDay: false, evening: true},
    // {drawDate: 'Nov 20, 2020', winningNumber:'48', midDay: false, evening: true},
    // {drawDate: 'Nov 19, 2020', winningNumber:'89', midDay: false, evening: true},
    // {drawDate: 'Nov 18, 2020', winningNumber:'09', midDay: false, evening: true},
    {drawDate: 'Nov 17, 2020', winningNumber:'08', midDay: false, evening: true},
    {drawDate: 'Nov 16, 2020', winningNumber:'73', midDay: false, evening: true},
    {drawDate: 'Nov 15, 2020', winningNumber:'31', midDay: false, evening: true},
    {drawDate: 'Nov 14, 2020', winningNumber:'35', midDay: false, evening: true},
    {drawDate: 'Nov 13, 2020', winningNumber:'72', midDay: false, evening: true},
    {drawDate: 'Nov 12, 2020', winningNumber:'36', midDay: false, evening: true},
    {drawDate: 'Nov 11, 2020', winningNumber:'33', midDay: false, evening: true},
    {drawDate: 'Nov 10, 2020', winningNumber:'09', midDay: false, evening: true},
    {drawDate: 'Nov 09, 2020', winningNumber:'44', midDay: false, evening: true},
    {drawDate: 'Nov 08, 2020', winningNumber:'01', midDay: false, evening: true},
    {drawDate: 'Nov 07, 2020', winningNumber:'44', midDay: false, evening: true},
    {drawDate: 'Nov 06, 2020', winningNumber:'01', midDay: false, evening: true},
    {drawDate: 'Nov 05, 2020', winningNumber:'46', midDay: false, evening: true},
    {drawDate: 'Nov 04, 2020', winningNumber:'50', midDay: false, evening: true},
    {drawDate: 'Nov 03, 2020', winningNumber:'69', midDay: false, evening: true},
    {drawDate: 'Nov 02, 2020', winningNumber:'86', midDay: false, evening: true},
    {drawDate: 'Nov 01, 2020', winningNumber:'56', midDay: false, evening: true},

  ];

  ngOnInit() {
    // this.WinningService.getPick2Winners()
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
