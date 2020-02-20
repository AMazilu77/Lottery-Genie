import { LuckyNumberModel } from '../my-profile/LuckyNumbers/luckNumbers.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class LuckyNumberPostService {

 private LuckyPosts: LuckyNumberModel[] = [];
 private postsUpdated = new Subject<LuckyNumberModel[]>();

 constructor(private http: HttpClient ) {}
 getPosts() {
  this.http.get<{message: string, LuckyNumbersDefaultPost: LuckyNumberModel[] }>('http://localhost:3000/api/posts')
  .subscribe((postData) => {
    this.LuckyPosts = postData.LuckyNumbersDefaultPost;
    this.postsUpdated.next([...this.LuckyPosts]);
  });
 }

 getPostUpdateListener() {
   return this.postsUpdated.asObservable();
 }

 addPost(numberSelected: number, reasoning: string) {
   const post: LuckyNumberModel =  { id: null, numberSelected, reasoning};
   this.http.post<{message: string}>('http://localhost:3000/api/posts', post ).subscribe((responseData) => {
    console.log(responseData.message);
   });

   this.LuckyPosts.push(post);
   this.postsUpdated.next([...this.LuckyPosts]);
 }
}
