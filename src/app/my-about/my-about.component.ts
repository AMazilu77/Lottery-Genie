import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.scss']
})
export class MyAboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   back() {
    this.router.navigate(['/dashBoard']);
  }

}
