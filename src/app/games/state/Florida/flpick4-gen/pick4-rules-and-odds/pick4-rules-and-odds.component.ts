import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick4-rules-and-odds',
  templateUrl: './pick4-rules-and-odds.component.html',
  styleUrls: ['./pick4-rules-and-odds.component.sass']
})
export class Pick4RulesAndOddsComponent implements OnInit {

  show;
  show1;
  show2;
  elseBlock;
  hidden;

  back() {
    this.router.navigate(['/FLPick2']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
