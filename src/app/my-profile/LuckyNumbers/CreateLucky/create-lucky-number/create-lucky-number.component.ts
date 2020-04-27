import { Component, OnInit } from '@angular/core';
import { LuckyNumberModel } from '../../luckNumbers.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  // top level object for a form
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;

  constructor(
    public luckyNumberService: LuckyNumberPostService,
    public route: ActivatedRoute
  ) {}

  // postCreated = new EventEmitter<LuckyNumberModel>();

  ngOnInit() {
    // initialize form group right off the bat
    this.form = new FormGroup({
      // validators is an array of validators we want to add, first value nulll, is starting value
      // tslint:disable-next-line: object-literal-key-quotes
      'numberSelected': new FormControl(null, {validators: [Validators.required, Validators.minLength(1)]
      }),
      // tslint:disable-next-line: object-literal-key-quotes
      'reasoning': new FormControl(null),
      // tslint:disable-next-line: object-literal-key-quotes
      'image': new FormControl(null),
    });
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
          this.post = {id: postData._id, numberSelected: postData.numberSelected, reasoning: postData.reasoning
          };
          this.form.setValue({
           // tslint:disable-next-line:object-literal-key-quotes
           'numberSelected': this.post.numberSelected,
           // tslint:disable-next-line: object-literal-key-quotes
           'reasoning': this.post.reasoning});
       });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }


  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    // informs angular the value has been changes and need to be re-evaluated and is valid
    this.form.get('image').updateValueAndValidity();
    // convert to data url which is a data  that can be used by image tag
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  onSaveLuck() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.luckyNumberService.addPost(
        this.form.value.numberSelected,
        this.form.value.reasoning
      );

    } else {
      this.luckyNumberService.updatePost(
        this.postId,
        this.form.value.numberSelected,
        this.form.value.reasoning
      );
      this.form.reset();
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
