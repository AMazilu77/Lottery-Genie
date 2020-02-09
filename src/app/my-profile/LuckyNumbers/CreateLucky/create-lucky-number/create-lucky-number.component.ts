import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.css']
})
export class CreateLuckyNumberComponent implements OnInit {
  constructor() {}
  enteredValue = '';
  newPost = ' no content';

  onAddLuck() {
    this.newPost = this.enteredValue;
  }

  ngOnInit() {}
}
