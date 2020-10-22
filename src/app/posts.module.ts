import { NgModule } from '@angular/core';
import { CreateLuckyNumberComponent } from './my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component';
import { LuckyListComponent } from './my-profile/LuckyNumbers/listLucky/lucky-list/lucky-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PlayerStatsComponent } from './my-profile/Stats/player-stats/player-stats.component';

@NgModule({
    declarations: [
        CreateLuckyNumberComponent,
        LuckyListComponent,
        MyProfileComponent,
        PlayerStatsComponent
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule
        
    ]
})

export class PostsModule {}