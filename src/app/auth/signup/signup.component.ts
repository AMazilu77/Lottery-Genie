import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
    isLoading = false;
    constructor(public authService: AuthService, private router: Router) { }
   
 

onSignup(form: NgForm) {
  console.log("🧪 SIGNUP FORM SUBMITTED:", form.value);

  if (form.invalid) {
    console.warn("⚠️ Form is invalid");
    return;
  }

  this.authService.createUser(form.value.email, form.value.password);
}

    back() {
        this.router.navigate(['/dashBoard']);
      }
}