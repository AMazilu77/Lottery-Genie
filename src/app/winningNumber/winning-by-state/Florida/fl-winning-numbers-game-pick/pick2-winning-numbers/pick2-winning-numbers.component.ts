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
  middayResults: WinningPick2NumberModel[] = [];
  eveningResults: WinningPick2NumberModel[] = [];
  // totalPosts = 0;
  // postsPerPage = 2;
  // currentPage = 1;
  // pageSizeOptions = [1, 2, 5, 10];
  constructor(private router: Router, public WinningService: winningNumbersServiceClass) { }

  

  ngOnInit() {
    this.WinningService.getPick2Winners().subscribe((data) => {
      this.middayResults = data.filter(entry => entry.midDay);
      this.eveningResults = data.filter(entry => entry.evening);
    });
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
