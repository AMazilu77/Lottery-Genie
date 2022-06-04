import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mutli-state-games',
  templateUrl: './mutli-state-games.component.html',
  styleUrls: ['./mutli-state-games.component.sass']
})
export class MutliStateGamesComponent implements OnInit {

  constructor(private theRouter: Router) { }


  ngOnInit(): void {
  }

  back() {
    this.theRouter.navigate(['/dashBoard']);
  }

}
