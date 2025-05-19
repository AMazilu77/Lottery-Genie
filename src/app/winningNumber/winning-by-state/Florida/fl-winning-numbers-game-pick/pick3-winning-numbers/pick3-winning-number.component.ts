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
    title = 'Pick 3'; 
  isLoading = false;
  winningPick3Numbers:WinningPick3NumberModel[] = [];
  // totalPosts = 0;
  // postsPerPage = 2;
  // currentPage = 1;
  // pageSizeOptions = [1, 2, 5, 10];
  constructor(private router: Router, public WinningService: winningNumbersServiceClass) { }

  middayResults: WinningPick3NumberModel[] = [];
  eveningResults: WinningPick3NumberModel[] = [];
  ngOnInit() {
    this.WinningService.getPick3Winners().subscribe((data: WinningPick3NumberModel[]) => {
      this.middayResults = data.filter(entry => entry.midDay);
      this.eveningResults = data.filter(entry => entry.evening);
    })
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
