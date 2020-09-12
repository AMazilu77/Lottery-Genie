import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class signupComponent {
    constructor(private router: Router) { }
    isLoading = false;
 

    onSignup(form: NgForm) {
        console.log(form.value)
    }

    back() {
        this.router.navigate(['/dashBoard']);
      }
}