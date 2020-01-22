import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pick5-rules-and-odds',
  templateUrl: './pick5-rules-and-odds.component.html',
  styleUrls: ['./pick5-rules-and-odds.component.sass']
})
export class Pick5RulesAndOddsComponent implements OnInit {

  show;
  show1;
  show2;
  elseBlock;
  hidden;


  back() {
    this.router.navigate(['/FLPick5']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
