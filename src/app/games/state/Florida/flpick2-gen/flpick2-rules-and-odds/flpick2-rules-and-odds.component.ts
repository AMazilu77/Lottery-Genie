import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flpick2-rules-and-odds',
  templateUrl: './flpick2-rules-and-odds.component.html',
  styleUrls: ['./flpick2-rules-and-odds.component.scss']
})
export class Flpick2RulesAndOddsComponent implements OnInit {

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
