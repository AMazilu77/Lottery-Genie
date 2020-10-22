import { NgModule } from '@angular/core';
import { CreateLuckyNumberComponent } from './my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component';
import { LuckyListComponent } from './my-profile/LuckyNumbers/listLucky/lucky-list/lucky-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
    declarations: [
        CreateLuckyNumberComponent,
        LuckyListComponent,
        MyProfileComponent
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMaterialModule,
        RouterModule,
        
    ]
})

export class PostsModule {}