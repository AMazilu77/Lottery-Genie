import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WinningPowerballNumbersModel } from '../../winningNumber.model';
import { winningNumbersServiceClass } from 'src/app/services/winningNumbers.service';

@Component({
  selector: 'app-powerball-winners',
  templateUrl: './powerball-winners.component.html',
  styleUrls: ['./powerball-winners.component.scss']
})
export class PowerballWinnersComponent implements OnInit {

  constructor(private theRouter: Router, private winningNumbersServiceClass: winningNumbersServiceClass) { }
  results: any[] = [];
  
  
  ngOnInit(): void {
      this.winningNumbersServiceClass.getPowerballResults()
        .subscribe((data: WinningPowerballNumbersModel[]) => {
          this.results = data;
        });
    }
  
  back(): void {
    window.history.back();
  }
  

  }


