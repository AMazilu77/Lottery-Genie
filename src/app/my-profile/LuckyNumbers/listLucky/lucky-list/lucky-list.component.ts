import { Component, OnInit } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
@Component({
  selector: 'app-lucky-list',
  templateUrl: './lucky-list.component.html',
  styleUrls: ['./lucky-list.component.scss']
})
export class LuckyListComponent implements OnInit {

  constructor(public luckyNumberService: LuckyNumberPostService ) {
  }

posts: LuckyNumberModel[] = [];

  ngOnInit() {
    this.posts = this.luckyNumberService.getPosts();
  }
}
