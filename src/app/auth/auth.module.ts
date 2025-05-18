import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { loginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
    declarations: [
        loginComponent,
        SignupComponent
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        FormsModule,
        RouterModule,
        AuthRoutingModule
    ]
})

export class AuthModule {}