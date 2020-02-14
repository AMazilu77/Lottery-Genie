import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.scss']
})
export class CreateLuckyNumberComponent implements OnInit {
  constructor() {}

  enteredValue = '';
  enteredReason = '';
  @Output() postCreated = new EventEmitter();

  onAddLuck() {
    const post = {NumberSelected: this.enteredValue,
                  reasoning: this.enteredReason
                };
    // this is where the event emitter emits the post to the parent component, my profile
    this.postCreated.emit(post);
  }

  ngOnInit() {}
}
