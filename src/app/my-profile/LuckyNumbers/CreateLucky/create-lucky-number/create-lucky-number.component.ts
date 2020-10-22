import { Component, OnDestroy, OnInit } from '@angular/core';
import { LuckyNumberModels } from '../../luckyNumberPost.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LuckyNumberPostService } from '../../../../services/luckyNumberPost.service';
// activated route object gives us important information about the route we're on
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mimeType } from './mime-type.validator';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-create-lucky-number',
  templateUrl: './create-lucky-number.component.html',
  styleUrls: ['./create-lucky-number.component.scss']
})
export class CreateLuckyNumberComponent implements OnInit, OnDestroy {
  enteredValue = '';
  enteredReason = '';
  post: LuckyNumberModels;
  isLoading = false;
  // top level object for a form
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;
  private authStatusSub: Subscription;

  constructor(
    public luckyNumberService: LuckyNumberPostService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  // postCreated = new EventEmitter<LuckyNumberModel>();

  ngOnInit() {
    // set up and subscribe to listener
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
      // whenever auth status changes, the laoder is disabled
        this.isLoading = false;
      });

    // initialize form group right off the bat
    this.form = new FormGroup({
      // validators is an array of validators we want to add, first value nulll, is starting value
      // tslint:disable-next-line: object-literal-key-quotes
      numberSelected: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      // tslint:disable-next-line: object-literal-key-quotes
      reasoning: new FormControl(null, { validators: [Validators.required] }),
      // tslint:disable-next-line: object-literal-key-quotes
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
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
          this.post = {
            id: postData._id,
            numberSelected: postData.numberSelected,
            reasoning: postData.reasoning,
            imagePath: postData.imagePath,
            creator: postData.creator
          };
          this.form.setValue({
            numberSelected: this.post.numberSelected,
            reasoning: this.post.reasoning,
            image: this.post.imagePath
          });    
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
        this.form.value.reasoning,
        this.form.value.image
      );

    } else {
      this.luckyNumberService.updatePost(
        this.postId,
        this.form.value.numberSelected,
        this.form.value.reasoning,
        this.form.value.image
      )
    }
      this.form.reset();
    
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
