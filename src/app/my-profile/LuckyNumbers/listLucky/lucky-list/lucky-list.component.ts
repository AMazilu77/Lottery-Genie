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
posts: LuckyNumberModels[] = [];
isLoading = false;
totalPosts = 0;
postsPerPage = 2;
currentPage = 1;
pageSizeOptions = [1, 2, 5, 10]
private postsSubscription: Subscription;

  ngOnInit() {
    this.isLoading = true;
    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
      .subscribe((postData: {posts: LuckyNumberModels[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    // add one because index starts at 0 on backend
    this.currentPage = pageData.pageIndex + 1
    this.postsPerPage= pageData.pageSize;
    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.luckyNumberService.deletePost(postId).subscribe(() => {
      this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  OnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
