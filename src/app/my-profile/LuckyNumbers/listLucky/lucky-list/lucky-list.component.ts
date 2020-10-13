import { Component, OnInit, OnDestroy } from '@angular/core';
import { LuckyNumberModels } from '../../luckyNumberPost.model';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-lucky-list',
  templateUrl: './lucky-list.component.html',
  styleUrls: ['./lucky-list.component.scss']
})
export class LuckyListComponent implements OnInit {

  constructor(public luckyNumberService: LuckyNumberPostService, private authService: AuthService ) {
  }
isLoading = false;
posts: LuckyNumberModels[] = [];
totalPosts = 10;
postsPerPage = 2;
currentPage = 1;
pageSizeOptions = [1, 2, 5, 10];
userIsAuthentic = false;
private postsSubscription: Subscription;
private authStatusSub: Subscription;

// set up subscription in oninit runs after authentication
  ngOnInit() {
    this.isLoading = true;
   // this.postsSubscription = this.luckyNumberService
    this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
      .subscribe((posts: LuckyNumberModels[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
      
      this.userIsAuthentic = this.authService.getIsAuth();
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        this.userIsAuthentic = isAuthenticated;
      })
  }

  onDelete(postId: string) {
    this.luckyNumberService.deletePost(postId);
  }

  OnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
