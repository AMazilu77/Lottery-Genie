import { Component, OnInit, OnDestroy } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lucky-list',
  templateUrl: './lucky-list.component.html',
  styleUrls: ['./lucky-list.component.scss']
})
export class LuckyListComponent implements OnInit {

  constructor(public luckyNumberService: LuckyNumberPostService ) {
  }

posts: LuckyNumberModel[] = [];
private postsSubscription: Subscription;

  ngOnInit() {
    this.posts = this.luckyNumberService.getPosts();
    // this is where the observable is made to keep track of new lucky number posts
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener().subscribe((posts: LuckyNumberModel[]) => {
    this.posts = posts;
    });
  }

  OnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
