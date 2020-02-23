import { LuckyNumberModel } from '../my-profile/LuckyNumbers/luckNumbers.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class LuckyNumberPostService {

 private posts: LuckyNumberModel[] = [];
 private postsUpdated = new Subject<LuckyNumberModel[]>();

 constructor(private http: HttpClient ) {}

 getPosts() {
  this.http.get<{message: string, posts: any }>('http://localhost:3000/api/posts')
  .pipe(map((postData) => {
    return postData.posts.map(post => {
      return {
        numberSelected: post.numberSelected,
        reasoning: post.reasoning,
        id: post._id
      };
    });
  }))
  .subscribe((transformedIDPosts) => {
    this.posts = transformedIDPosts;
    this.postsUpdated.next([...this.posts]);
  });
 }

 getPostUpdateListener() {
   return this.postsUpdated.asObservable();
 }

 addPost(numberSelected: number, reasoning: string, ) {
   const post: LuckyNumberModel =  { id: null, numberSelected, reasoning};
   this.http
   .post<{message: string, postId: string}>('http://localhost:3000/api/posts', post )
   .subscribe((responseData) => {
    const id = responseData.postId;
    post.id = id;
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
   });
 }

 deletePost(postId: string) {
   this.http.delete('http://localhost:3000/api/posts/' + postId)
   .subscribe(() => {
     const updatedPosts = this.posts.filter(post => post.id !== postId);
     this.posts = updatedPosts;
     this.postsUpdated.next([...this.posts]);
     console.log('Lucky Number Deleted!');
   });
 }
}
