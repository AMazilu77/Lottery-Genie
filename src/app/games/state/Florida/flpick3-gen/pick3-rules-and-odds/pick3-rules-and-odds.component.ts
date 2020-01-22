import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pick3-rules-and-odds',
  templateUrl: './pick3-rules-and-odds.component.html',
  styleUrls: ['./pick3-rules-and-odds.component.sass']
})
export class Pick3RulesAndOddsComponent implements OnInit {
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
