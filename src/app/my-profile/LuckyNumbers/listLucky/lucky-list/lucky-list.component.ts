import { Component, OnInit, OnDestroy } from '@angular/core';
import { LuckyNumberModels } from '../../luckyNumberPost.model';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-lucky-list',
  templateUrl: './lucky-list.component.html',
  styleUrls: ['./lucky-list.component.scss']
})
export class LuckyListComponent implements OnInit, OnDestroy {

  constructor(public luckyNumberService: LuckyNumberPostService, private authService: AuthService ) {
  }
isLoading = false;
posts: LuckyNumberModels[] = [];
totalPosts = 0;
postsPerPage = 2;
currentPage = 1;
pageSizeOptions = [1, 2, 5, 10];
userIsAuthentic = false;
userId: string;
private postsSubscription: Subscription;
private authStatusSub: Subscription;

// set up subscription in oninit runs after authentication
  ngOnInit() {
    this.isLoading = true;
    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
      .subscribe((postData: {posts: LuckyNumberModels[], postCount: number}) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
      
      this.userIsAuthentic = this.authService.getIsAuth();
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        this.userIsAuthentic = isAuthenticated;
        this.userId = this.authService.getUserId();
        
      })
  }


  onDelete(postId: string) {
    this.isLoading = true;
    this.luckyNumberService.deletePost(postId).subscribe(() => {
      this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    }, () => {
      this.isLoading = false;
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
