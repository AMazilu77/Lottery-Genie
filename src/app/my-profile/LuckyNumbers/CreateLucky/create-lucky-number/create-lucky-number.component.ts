import { Component, OnInit } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { NgForm } from '@angular/forms';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';


@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.scss']
})
export class CreateLuckyNumberComponent implements OnInit {
  constructor(public luckyNumberService: LuckyNumberPostService) {}

  enteredValue;
  enteredReason = '';
  // postCreated = new EventEmitter<LuckyNumberModel>();

  onAddLuck(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.luckyNumberService.addPost(
     form.value.numberSelected,
     form.value.reasoning);
    form.resetForm();
  }

  ngOnInit() {}
}
