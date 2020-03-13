import { LuckyNumberModel } from '../my-profile/LuckyNumbers/luckNumbers.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LuckyNumberPostService {
  private posts: LuckyNumberModel[] = [];
  private postsUpdated = new Subject<LuckyNumberModel[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts() {

    this.http
    .get<{ message: string; posts: any }>('http://localhost:3000/api/posts')
    .pipe(
      map(postData => {
        return postData.posts.map(post => {
          return {
            numberSelected: post.numberSelected,
            reasoning: post.reasoning,
            id: post._id
          };
        });
      })
    )
    .subscribe(transformedPosts => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });

    // this.http
    //   .get<{ message: string; posts: any }>('http://localhost:3000/api/posts')
    //   .pipe(
    //     map(postData => {
    //       return postData.posts.map(post => {
    //         return {
    //           numberSelected: post.numberSelected,
    //           reasoning: post.reasoning,
    //           id: post._id
    //         };
    //       });
    //     })
    //   )
    //   .subscribe(transformedIDPosts => {
    //     this.posts = transformedIDPosts;
    //     this.postsUpdated.next([...this.posts]);
    //   });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }


  // getting post to edit a single post from list of posts
  getPost(id: string) {
    // return a new object clone of the object returning
    return {...this.posts.find(p => p.id === id)};

    // return this.http.get<{ _id: string; numberSelected: number; reasoning: string }>(
    //   'http://localhost:3000/api/posts/' + id
    // );
  }



  addPost(numberSelected: number, reasoning: string) {
    const post: LuckyNumberModel = { id: null, numberSelected: numberSelected, reasoning: reasoning };
    this.http
      .post<{ message: string; postId: string }>(
        'http://localhost:3000/api/posts',
        post
      )
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        console.log('post id is: ', id);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/profile']);
      });
  }


  updatePost(id: string, numberSelected: number, reasoning: string) {

    const post: LuckyNumberModel = { id: id, numberSelected: numberSelected, reasoning: reasoning };
    this.http
      .put('http://localhost:3000/api/posts/' + id, post)
      .subscribe(response => console.log(response));

    // const post: LuckyNumberModel = { id, numberSelected, reasoning };
    // this.http
    //   .put('http://localhost:3000/api/posts/' + id, post)
    //   .subscribe(response => {
    //     const updatedPosts = [...this.posts];
    //     const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
    //     updatedPosts[oldPostIndex] = post;
    //     this.posts = updatedPosts;
    //     this.postsUpdated.next([...this.posts]);
    //     this.router.navigate(['/profile']);
     // });
  }

  deletePost(postId: string) {
    this.http
      .delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        console.log('Lucky Number Deleted!');
      });
  }

  // spread operator pulls out all the properties of an object and puts them into a new object
  // getLuckyNumberPost(id: string) {
  //   return { ...this.posts.find(p => p.id === id) };
  // }

}

// updatePost(id: string, title: string, content: string) {
//   const post: Post = { id: id, title: title, content: content };
//   this.http
//     .put("http://localhost:3000/api/posts/" + id, post)
//     .subscribe(response => {
//       const updatedPosts = [...this.posts];
//       const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
//       updatedPosts[oldPostIndex] = post;
//       this.posts = updatedPosts;
//       this.postsUpdated.next([...this.posts]);
//       this.router.navigate(["/"]);
//     });
// }
