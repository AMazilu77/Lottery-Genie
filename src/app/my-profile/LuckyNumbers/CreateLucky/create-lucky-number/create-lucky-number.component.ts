import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.scss']
})
export class CreateLuckyNumberComponent implements OnInit {
  constructor() {}

  enteredValue;
  enteredReason = '';
  @Output() postCreated = new EventEmitter<LuckyNumberModel>();

  onAddLuck(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: LuckyNumberModel = {NumberSelected: form.value.numberSelected,
                  reasoning: form.value.reasoning
                };
    // this is where the event emitter emits the post to the parent component, my profile
    this.postCreated.emit(post);
  }

  ngOnInit() {}
}
