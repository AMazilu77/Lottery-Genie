import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-state-game-pick',
  templateUrl: './state-game-pick.component.html',
  styleUrls: ['./state-game-pick.component.scss']
})
export class StateGamePickComponent implements OnInit {
  stateCode: string = '';

  constructor(private route: ActivatedRoute, private theRouter: Router) {}

  ngOnInit(): void {
    this.stateCode = this.route.snapshot.paramMap.get('state') || '';
  }

    back() {
    this.theRouter.navigate(['/dashBoard']);
  }

}
