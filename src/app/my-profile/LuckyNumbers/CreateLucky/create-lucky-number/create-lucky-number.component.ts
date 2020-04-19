import { Component, OnInit } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { NgForm } from '@angular/forms';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
// activated route object gives us important information about the route we're on
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.scss']
})
export class CreateLuckyNumberComponent implements OnInit {
  enteredValue = '';
  enteredReason = '';
  post: LuckyNumberModel;
  isLoading = false;
  private mode = 'create';
  private postId: string;

  constructor(
    public luckyNumberService: LuckyNumberPostService,
    public route: ActivatedRoute
  ) {}

  // postCreated = new EventEmitter<LuckyNumberModel>();

  ngOnInit() {
    // find out if we have a postId paramater using built-in paramMap observable
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // check to see if the URL has a post ID
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        // extract post ID
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        // fetch information about the post we are editing from the post service
        this.luckyNumberService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
         // information coming from the database
          this.post = {id: postData._id, numberSelected: postData.numberSelected, reasoning: postData.reasoning};
       });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSaveLuck(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.luckyNumberService.addPost(
        form.value.numberSelected,
        form.value.reasoning
      );

    } else {
      this.luckyNumberService.updatePost(
        this.postId,
        form.value.numberSelected,
        form.value.reasoning
      );
      form.resetForm();
    }
  }



  // onSaveLuck(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   if (this.mode === 'create' ) {
  //     this.luckyNumberService.addPost(
  //       form.value.numberSelected,
  //       form.value.reasoning
  //     );
  //   } else {
  //     this.luckyNumberService.updatePost(this.postId, form.value.numberSelected, form.value.reasoning);
  //   }

  //   form.resetForm();
  // }

  // onSavePost(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   if (this.mode === "create") {
  //     this.postsService.addPost(form.value.title, form.value.content);
  //   } else {
  //     this.postsService.updatePost(
  //       this.postId,
  //       form.value.title,
  //       form.value.content
  //     );
  //   }
  //   form.resetForm();
  // }
}
