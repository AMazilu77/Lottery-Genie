import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  DashBoard = [];

  constructor(
    // injecting auth service
    private theRouter: Router) { }


  ngOnInit() {
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
    this.theRouter.navigate(['/userProfile']);
  }
}
