import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-winning-numbers-main',
  templateUrl: './winning-numbers-main.component.html',
  styleUrls: ['./winning-numbers-main.component.scss']
})
export class WinningNumbersMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/dashBoard']);
  }

}
