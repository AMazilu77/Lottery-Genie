import { Component, OnInit } from '@angular/core';
import { WinningPick5NumberModel } from '../../../../winningNumber.model';
import { winningNumbersServiceClass } from '../../../../../services/winningNumbers.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pick5-winning-numbers',
  templateUrl: './pick5-winning-numbers.component.html',
  styleUrls: ['./pick5-winning-numbers.component.scss']
})
export class Pick5WinningNumbersComponent implements OnInit {
  results: WinningPick5NumberModel[] = [];

  constructor(private winningService: winningNumbersServiceClass, private router: Router) {}

  ngOnInit(): void {
    this.winningService.getPick5Results().subscribe((data) => {
      this.results = data;
    });
  }

   back() {
    this.router.navigate(['/dashBoard']);
  }
}
