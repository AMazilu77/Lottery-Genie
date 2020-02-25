import { Component, OnInit } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { NgForm } from '@angular/forms';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.scss']
})
export class CreateLuckyNumberComponent implements OnInit {
  constructor(
    public luckyNumberService: LuckyNumberPostService,
    public route: ActivatedRoute
  ) {}

  enteredValue = '';
  enteredReason = '';
  post: LuckyNumberModel;
  private mode = 'create';
  private postId: string;

  // postCreated = new EventEmitter<LuckyNumberModel>();

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.luckyNumberService.getLuckyNumberPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onAddLuck(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.luckyNumberService.addPost(
      form.value.numberSelected,
      form.value.reasoning
    );
    form.resetForm();
  }
}
