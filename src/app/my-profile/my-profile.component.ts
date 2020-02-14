import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  constructor(private router: Router) { }

  luckyNumberPosts = [];


  back() {
    this.router.navigate(['/dashBoard']);
  }

  ngOnInit() {
  }

  // recieving the post from create lucky number component event emitter
  onPostsAdded(post) {
    this.luckyNumberPosts.push(post);
    console.log('recieved posted', post);
  }
}
