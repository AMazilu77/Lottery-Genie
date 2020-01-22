import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flgame-pick',
  templateUrl: './flgame-pick.component.html',
  styleUrls: ['./flgame-pick.component.scss']
})
export class FLGamePickComponent implements OnInit {

  constructor(private theRouter: Router) { }

  ngOnInit() {
  }
  back() {
    this.theRouter.navigate(['/LotteryNumberGenMainPage']);
  }
}
