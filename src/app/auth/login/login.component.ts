import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class loginComponent {
    isLoading = false;
    constructor(private router: Router, public authService: AuthService) { }

    onLogin(form: NgForm) {
        if (form.invalid) {
            return
        } 
        this.authService.login(form.value.email, form.value.password ) 
    };

  back() {
    this.router.navigate(['/dashBoard']);
  }
}