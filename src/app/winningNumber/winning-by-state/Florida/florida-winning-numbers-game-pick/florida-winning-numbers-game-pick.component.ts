import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-florida-winning-numbers-game-pick',
  templateUrl: './florida-winning-numbers-game-pick.component.html',
  styleUrls: ['./florida-winning-numbers-game-pick.component.scss']
})
export class FloridaWinningNumbersGamePickComponent implements OnInit {


  back() {
    this.theRouter.navigate(['/dashBoard']);
  }

  constructor(private theRouter: Router) { }

  ngOnInit() {
  }

}
