import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { winningNumbersServiceClass } from '../../../services/winningNumbers.service';
import { WinningMegaMellionsNumbersModel } from '../../winningNumber.model';


@Component({
  selector: 'app-mega-millions-winners',
  templateUrl: './mega-millions-winners.component.html',
  styleUrls: ['./mega-millions-winners.component.sass']
})
export class MegaMillionsWinnersComponent implements OnInit {
  WinningMegaMellionsNumbers:WinningMegaMellionsNumbersModel[] = [];

  constructor(private theRouter: Router,  public WinningService: winningNumbersServiceClass) { }


  ngOnInit(): void {
  }

  back() {
    this.theRouter.navigate(['/dashBoard']);
  }

}
