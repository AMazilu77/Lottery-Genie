import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class loginComponent {
    isLoading = false;
    constructor(private router: Router) { }

    onLogin(form: NgForm) {
        console.log(form.value)  
    };

  back() {
    this.router.navigate(['/dashBoard']);
  }
}