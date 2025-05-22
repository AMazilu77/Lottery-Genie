import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit, OnDestroy {
  userIsAuthentic = false;
  phraseNumber: number;
  Phrase: string;

  randomPhrase: string[] = ['Create an account and log in to save numbers and keep track of lucky numbers stats.', 'How may I serve you?', 'What is your feeble request?',
'You only get 3 wishes', 'Greed is Good.', 'Login to access full features', 'I can teach you about game theory, statistics and probability, you need only wish it!', 'Get on with it, mortal', '',
 'Allow for notifications and I will alert you any time a number you played and saved wins.', 'Create an account and log in to to enjoy the full features.' ];
  private authListenerSubscription: Subscription
  DashBoard = [];

  constructor(private authService: AuthService, private theRouter: Router) { }


  ngOnInit() {
    this.userIsAuthentic = this.authService.getIsAuth();
    this.authListenerSubscription = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthentic = isAuthenticated;
    });
    // this._DashBoardService.getDash()
    //   .subscribe(
    //     res => this.DashBoard = res,
    //     err => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //           this._router.navigate(['/login']);
    //         }
    //       }
    //     }
    //   );

    this.randomPhraseGen()
    
    
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubscription.unsubscribe();
  }

  gotoWinningNums() {
    this.theRouter.navigate(['/winningNumbersStatePick']);
  }

  gotoGenerator() {
    this.theRouter.navigate(['/LotteryNumberGenMainPage']);
  }

  // gotoPlayedHistory() {
  //   this._router.navigate(['/PlayedNumbersHistory']);
  // }

  gotoProfile() {
    this.theRouter.navigate(['/profile']);
  }

  randomPhraseGen() {
    this.phraseNumber = Math.floor(Math.random() * this.randomPhrase.length);
    console.log(this.phraseNumber);
    if (this.phraseNumber === 1) { this.Phrase = this.randomPhrase[0]; }
    if (this.phraseNumber === 2) { this.Phrase = this.randomPhrase[1]; }
    if (this.phraseNumber === 3) { this.Phrase = this.randomPhrase[2]; }
    if (this.phraseNumber === 4) { this.Phrase = this.randomPhrase[3]; }
    if (this.phraseNumber === 5) { this.Phrase = this.randomPhrase[4]; }
    if (this.phraseNumber === 6) { this.Phrase = this.randomPhrase[5]; }
    if (this.phraseNumber === 7) { this.Phrase = this.randomPhrase[6]; }
    if (this.phraseNumber === 8) { this.Phrase = this.randomPhrase[7]; }
    if (this.phraseNumber === 9) { this.Phrase = this.randomPhrase[8]; }
    if (this.phraseNumber === 10) { this.Phrase = this.randomPhrase[9]; }
    if (this.phraseNumber === 11) { this.Phrase = this.randomPhrase[10]; }
    if (this.phraseNumber === 12) { this.Phrase = this.randomPhrase[11]; }
    if (this.phraseNumber === 13) { this.Phrase = this.randomPhrase[12]; }
    if (this.phraseNumber === 14) { this.Phrase = this.randomPhrase[13]; }
    if (this.phraseNumber === 15) { this.Phrase = this.randomPhrase[14]; }
    if (this.phraseNumber === 16) { this.Phrase = this.randomPhrase[15]; }
   
    console.log(this.Phrase)
  }

    goToAbout() {
    this.theRouter.navigate(['/about']);
  }


}
