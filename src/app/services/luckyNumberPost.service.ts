import { LuckyNumberModel } from '../my-profile/LuckyNumbers/luckNumbers.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LuckyNumberPostService {

 private LuckyPosts: LuckyNumberModel[] = [];
 private postsUpdated = new Subject<LuckyNumberModel[]>();

 getPosts() {
   return this.LuckyPosts;
 }

 getPostUpdateListener() {
   return this.postsUpdated.asObservable();
 }

 addPost(numberSelected: number, reasoning: string) {
   const post: LuckyNumberModel =  { numberSelected, reasoning};
   this.LuckyPosts.push(post);
   this.postsUpdated.next([...this.LuckyPosts]);
 }
}
