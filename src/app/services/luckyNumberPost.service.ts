import { LuckyNumberModel } from '../my-profile/LuckyNumbers/luckNumbers.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LuckyNumberPostService {
 private LuckyPosts: LuckyNumberModel[] = [];

 getPosts() {
   return this.LuckyPosts;
 }

 addPost(numberSelected: number, reasoning: string) {
   const post: LuckyNumberModel =  { numberSelected, reasoning};
   this.LuckyPosts.push(post);
 }
}
