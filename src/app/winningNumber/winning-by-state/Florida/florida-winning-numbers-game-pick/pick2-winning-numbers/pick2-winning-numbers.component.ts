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
  constructor(private router: Router, WinningService: winningNumbersServiceClass) { }

  ngOnInit() {
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
