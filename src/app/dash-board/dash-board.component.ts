import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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
  private authListenerSubscription: Subscription
  DashBoard = [];

  constructor(private authService: AuthService, private theRouter: Router) { }


  ngOnInit() {

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
}
