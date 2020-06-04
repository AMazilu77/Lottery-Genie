import { Component, OnInit, OnDestroy } from '@angular/core';
import { LuckyNumberModels } from '../../luckyNumberPost.model';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-lucky-list',
  templateUrl: './lucky-list.component.html',
  styleUrls: ['./lucky-list.component.scss']
})
export class LuckyListComponent implements OnInit {

  constructor(public luckyNumberService: LuckyNumberPostService ) {
  }
isLoading = false;
posts: LuckyNumberModels[] = [];
totalPosts = 10;
postsPerPage = 2;
pageSizeOptions = [1, 2, 5, 10]
private postsSubscription: Subscription;

  ngOnInit() {

    this.luckyNumberService.getPosts();
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
      .subscribe((posts: LuckyNumberModels[]) => {
        this.posts = posts;
      });

    // this.isLoading = true;
    // this.luckyNumberService.getPosts();
    // // this is where the observable is made to keep track of new lucky number posts
    // this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
    // .subscribe((posts: LuckyNumberModel[]) => {
    // this.isLoading = false;
    // this.posts = posts;
    // });
  }

  onChangedPage(pageData: PageEvent) {
    console.log(pageData)
  }

  onDelete(postId: string) {
    this.luckyNumberService.deletePost(postId);
  }

  OnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
