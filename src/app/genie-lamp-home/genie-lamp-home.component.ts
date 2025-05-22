import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-genie-lamp-home',
  templateUrl: './genie-lamp-home.component.html',
  styleUrls: ['./genie-lamp-home.component.scss']
})
export class GenieLampHomeComponent implements OnInit {
  title = 'The Lottery Genie';
  constructor(private router: Router) { }

  ngOnInit() {

  }


  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }

  goToDash() {
    this.router.navigate(['/dashBoard']);
  }

}

