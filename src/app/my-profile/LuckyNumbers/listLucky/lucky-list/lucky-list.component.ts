import { Component, OnInit, Input } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';

@Component({
  selector: 'app-lucky-list',
  templateUrl: './lucky-list.component.html',
  styleUrls: ['./lucky-list.component.scss']
})
export class LuckyListComponent implements OnInit {
  constructor() {}

  @Input() posts: LuckyNumberModel[] = [];

  ngOnInit() {}
}
