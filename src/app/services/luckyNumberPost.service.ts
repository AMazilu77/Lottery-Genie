import { LuckyNumberModels } from '../my-profile/LuckyNumbers/luckyNumberPost.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LuckyNumberPostService {
  private posts: LuckyNumberModels[] = [];
  private postsUpdated = new Subject<LuckyNumberModels[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>('http://localhost:3000/api/posts')
      .pipe(
        map((postData) => {
          return postData.posts.map((post) => {
            return {
              numberSelected: post.numberSelected,
              reasoning: post.reasoning,
              id: post._id,
              imagePath: post.imagePath
            };
          });
        })
      )
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  // getting post to edit a single post from list of posts
  getPost(id: string) {
    // subscribe to observable
    return this.http.get<{
      _id: string;
      numberSelected: string;
      reasoning: string;
    }>('http://localhost:3000/api/posts/' + id);
  }



  // ****  addPost is the ADD LUCKY NUMBER POST FUNCTION - change to number to string ***

  addPost(numberSelected: string, reasoning: string, image: File) {
    // sending form data instead of JSON, data format to combine text and file values
    const postData = new FormData();
    postData.append('numberSelected', numberSelected);
    postData.append('reasoning', reasoning);
    postData.append('image', image, numberSelected);
    this.http
      .post<{ message: string; post: LuckyNumberModels }>(
        'http://localhost:3000/api/posts',
        postData
      )
      .subscribe((responseData) => {
        // tslint:disable-next-line: no-shadowed-variable
        // tslint:disable-next-line: no-shadowed-variable
        const post: LuckyNumberModels = {
           id: responseData.post.id,
           // tslint:disable-next-line: object-literal-shorthand
           numberSelected: numberSelected,
           // tslint:disable-next-line: object-literal-shorthand
           reasoning: reasoning,
           imagePath: responseData.post.imagePath
          };
        // const id = responseData.postId;
        // post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/dashBoard']);
      });
  }

  // **** UPDATE LUCKY NUMBER POST FUNCTION - changed number selected to string ***

  updatePost(id: string, numberSelected: string, reasoning: string) {
    // tslint:disable-next-line: object-literal-shorthand
    const post: LuckyNumberModels = {
      // tslint:disable-next-line: object-literal-shorthand
      id: id,
      // tslint:disable-next-line: object-literal-shorthand
      numberSelected: numberSelected,
      // tslint:disable-next-line: object-literal-shorthand
      reasoning: reasoning,
      imagePath: null
    };
    this.http
      .put('http://localhost:3000/api/posts/' + id, post)
      .subscribe((response) => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex((p) => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/profile']);
      });
  }

  deletePost(postId: string) {
    this.http
      .delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter((post) => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        console.log('Lucky Number Deleted!');
      });
  }
}

