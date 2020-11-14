import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick2-winning-numbers',
  templateUrl: './pick2-winning-numbers.component.html',
  styleUrls: ['./pick2-winning-numbers.component.scss']
})
export class Pick2WinningNumbersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  back() {
    this.router.navigate(['/dashBoard']);
  }

}
