import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  constructor(private router: Router) { }



  back() {
    this.router.navigate(['/dashBoard']);
  }

  // createLuck() {
  //   this.router.navigate(['/create']);
  // }

  ngOnInit() {
  }
}
