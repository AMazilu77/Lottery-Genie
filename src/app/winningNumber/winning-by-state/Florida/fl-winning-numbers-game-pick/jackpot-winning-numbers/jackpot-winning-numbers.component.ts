import { Component, OnInit } from '@angular/core';
import { winningNumbersServiceClass } from 'src/app/services/winningNumbers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jackpot-winning-numbers',
  templateUrl: './jackpot-winning-numbers.component.html',
  styleUrls: ['./jackpot-winning-numbers.component.scss']
})
export class JackpotTriplePlayWinnersComponent implements OnInit {
  results: any[] = [];
  error: string | null = null;
  showRules = false;

  constructor(
    private winningNumbersServiceClass: winningNumbersServiceClass,
    private router: Router
  ) {}

ngOnInit(): void {
  this.fetchResults();
}

fetchResults(): void {
  this.winningNumbersServiceClass.getJackpotTriplePlayResults().subscribe({
    next: (data: any[]) => {
      // Ensure most recent draws are shown first
      this.results = data.sort((a, b) => new Date(b.drawDate).getTime() - new Date(a.drawDate).getTime());
    },
    error: (err) => {
      this.error = 'Failed to fetch winning numbers.';
      console.error(err);
    }
  });
}

  back(): void {
    this.router.navigate(['/FLGamePick']);
  }
}
