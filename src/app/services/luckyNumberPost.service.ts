import { LuckyNumberModels } from '../my-profile/LuckyNumbers/luckyNumberPost.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LuckyNumberPostService {
  private posts: LuckyNumberModels[] = [];
  private postsUpdated = new Subject<{ posts: LuckyNumberModels[]; postCount: number}>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    // js feature allows you to dynamically add values into a normal string with backticks
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
    // updated post array and max posts
      .get<{ message: string; posts: any, maxPosts: number }>(
        'http://localhost:3000/api/posts' + queryParams
        )
      .pipe(
        map(postData => {
          return { 
            posts: postData.posts.map(post => {
              return {
                numberSelected: post.numberSelected,
                reasoning: post.reasoning,
                id: post._id,
                imagePath: post.imagePath
              };
            }),
            maxPosts: postData.maxPosts
          };
        })
      )
      // has posts property which holds posts, but also has the max posts info
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({ 
          posts: [...this.posts], 
          postCount: transformedPostData.maxPosts
        });
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
      imagePath: string;
    }>('http://localhost:3000/api/posts/' + id
    );
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
      .subscribe(responseData => {
        this.router.navigate(['/dashBoard']);
      });
  }

  // **** UPDATE LUCKY NUMBER POST FUNCTION - changed number selected to string ***

  updatePost(id: string, numberSelected: string, reasoning: string,  image: File | string) {
    let postData: LuckyNumberModels | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("numberSelected", numberSelected);
      postData.append("reasoning", reasoning);
      postData.append("image", image, numberSelected);
    } else {
      postData = {
        id: id,
        numberSelected: numberSelected,
        reasoning: reasoning,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/posts/" + id, postData)
      .subscribe(response => {
        this.router.navigate(["/profile"]);
      });
  }

  deletePost(postId: string) {
    return this.http
      .delete('http://localhost:3000/api/posts/' + postId);
  
  }
}

