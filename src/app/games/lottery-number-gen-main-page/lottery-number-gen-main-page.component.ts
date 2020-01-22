// This is the page where the player picks the state for state specific lottery games

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lottery-number-gen-main-page',
  templateUrl: './lottery-number-gen-main-page.component.html',
  styleUrls: ['./lottery-number-gen-main-page.component.scss']
})
export class LotteryNumberGenMainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/dashBoard']);
  }
}
