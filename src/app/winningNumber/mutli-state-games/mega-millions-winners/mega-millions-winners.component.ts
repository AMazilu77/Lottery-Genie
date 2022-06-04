import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mega-millions-winners',
  templateUrl: './mega-millions-winners.component.html',
  styleUrls: ['./mega-millions-winners.component.sass']
})
export class MegaMillionsWinnersComponent implements OnInit {

  constructor(private theRouter: Router) { }


  ngOnInit(): void {
  }

  back() {
    this.theRouter.navigate(['/dashBoard']);
  }

}
