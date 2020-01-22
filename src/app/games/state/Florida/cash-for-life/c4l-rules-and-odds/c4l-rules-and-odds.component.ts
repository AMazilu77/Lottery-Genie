import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-c4l-rules-and-odds',
  templateUrl: './c4l-rules-and-odds.component.html',
  styleUrls: ['./c4l-rules-and-odds.component.sass']
})
export class C4lRulesAndOddsComponent implements OnInit {
  show;
  show1;
  show2;
  elseBlock;
  hidden;

  back() {
    this.router.navigate(['/FLPick5']);
  }
  constructor(private router: Router) {}

  ngOnInit() {}
}
