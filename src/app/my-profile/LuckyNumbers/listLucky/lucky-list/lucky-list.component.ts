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
private postsSubscription: Subscription;
private authStatusSub: Subscription;

  ngOnInit() {
    this.isLoading = true;
   // this.postsSubscription = this.luckyNumberService
    this.luckyNumberService.getPosts();
    this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
      .subscribe((posts: LuckyNumberModels[]) => {
        this.posts = posts;
      });
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe()
      this.isLoading = false;
    // this.luckyNumberService.getPosts();
    // // this is where the observable is made to keep track of new lucky number posts
    // this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
    // .subscribe((posts: LuckyNumberModel[]) => {
    // this.isLoading = false;
    // this.posts = posts;
    // });
  }

  onDelete(postId: string) {
    this.luckyNumberService.deletePost(postId);
  }

  OnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
