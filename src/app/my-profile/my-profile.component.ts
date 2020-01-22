import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NumberGenService } from '../../../../services/number-gen.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {


  back() {
    this.router.navigate(['/dashBoard']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
