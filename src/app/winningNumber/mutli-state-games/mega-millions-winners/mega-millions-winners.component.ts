import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { winningNumbersServiceClass } from '../../../services/winningNumbers.service';
import { WinningMegaMellionsNumbersModel } from '../../winningNumber.model';

@Component({
  selector: 'app-mega-millions-winners',
  templateUrl: './mega-millions-winners.component.html',
  styleUrls: ['./mega-millions-winners.component.scss']
})
export class MegaMillionsWinnersComponent implements OnInit {
  results: any[] = [];

  constructor(private http: HttpClient, public winningNumbersServiceClass: winningNumbersServiceClass
) {}

ngOnInit(): void {
  this.winningNumbersServiceClass.getMegaMillionsResults()
    .subscribe((data: WinningMegaMellionsNumbersModel[]) => {
      this.results = data;
    });
}

  back(): void {
    window.history.back();
  }
}
