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
currentPage = 1;
pageSizeOptions = [1, 2, 5, 10]
private postsSubscription: Subscription;

  ngOnInit() {

    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
      .subscribe((posts: LuckyNumberModels[]) => {
        this.posts = posts;
      });
  }

  onChangedPage(pageData: PageEvent) {
    // add one because index starts at 0 on backend
    this.currentPage = pageData.pageIndex + 1
    this.postsPerPage= pageData.pageSize;
    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDelete(postId: string) {
    this.luckyNumberService.deletePost(postId);
  }

  OnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
