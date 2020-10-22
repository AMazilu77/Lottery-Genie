import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenieLampHomeComponent } from './genie-lamp-home/genie-lamp-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LotteryNumberGenMainPageComponent } from './games/lottery-number-gen-main-page/lottery-number-gen-main-page.component';
import { FLGamePickComponent } from './games/state/Florida/flgame-pick/flgame-pick.component';
import { FLPick2GenComponent } from './games/state/Florida/flpick2-gen/flpick2-gen.component';
import { Flpick3GenComponent } from './games/state/Florida/flpick3-gen/flpick3-gen.component';
import { Flpick4GenComponent } from './games/state/Florida/flpick4-gen/flpick4-gen.component';
import { Flpick5GenComponent } from './games/state/Florida/flpick5-gen/flpick5-gen.component';
import { FlLuckyMoneyGenComponent } from './games/state/Florida/fl-lucky-money-gen/fl-lucky-money-gen.component';
import { FLFantasy5GenComponent } from './games/state/Florida/flfantasy5-gen/flfantasy5-gen.component';
import { CashForLifeComponent } from './games/state/Florida/cash-for-life/cash-for-life.component';
import { FlLottoGenComponent } from './games/state/Florida/fl-lotto-gen/fl-lotto-gen.component';
import { MegaMillionsGenComponent } from './games/state/Florida/mega-millions-gen/mega-millions-gen.component';
import { PowerBallGenComponent } from './games/state/Florida/power-ball-gen/power-ball-gen.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Flpick2RulesAndOddsComponent } from './games/state/Florida/flpick2-gen/flpick2-rules-and-odds/flpick2-rules-and-odds.component';
import { WinningNumbersMainComponent } from './winningNumber/winning-numbers-main-page/winning-numbers-main/winning-numbers-main.component';
// tslint:disable-next-line: max-line-length
import { FloridaWinningNumbersGamePickComponent } from './winningNumber/winning-by-state/Florida/florida-winning-numbers-game-pick/florida-winning-numbers-game-pick.component';
// tslint:disable-next-line: max-line-length
import { Pick2WinningNumbersComponent } from './winningNumber/winning-by-state/Florida/pick2-winning-numbers/pick2-winning-numbers.component';
import { Pick3RulesAndOddsComponent } from './games/state/Florida/flpick3-gen/pick3-rules-and-odds/pick3-rules-and-odds.component';
import { Pick4RulesAndOddsComponent } from './games/state/Florida/flpick4-gen/pick4-rules-and-odds/pick4-rules-and-odds.component';
import { Pick5RulesAndOddsComponent } from './games/state/Florida/flpick5-gen/pick5-rules-and-odds/pick5-rules-and-odds.component';

// tslint:disable-next-line: max-line-length
import { LuckyMoneyRulesAndOddsComponent } from './games/state/Florida/fl-lucky-money-gen/lucky-money-rules-and-odds/lucky-money-rules-and-odds.component';

import { CreateLuckyNumberComponent } from './my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component';
// import { EditLuckComponent } from './my-profile/LuckyNumbers/listLucky/edit/edit-luck/edit-luck.component';
import { loginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGaurd } from './auth/login/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // main app page options
  { path: 'home', component: GenieLampHomeComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'dashBoard', component: DashBoardComponent },
  { path: 'profile', component: MyProfileComponent, canActivate: [AuthGaurd] },
  { path: 'create', component: CreateLuckyNumberComponent, canActivate: [AuthGaurd] },
  { path: 'edit/:postId', component: CreateLuckyNumberComponent, canActivate: [AuthGaurd] },
 // { path: 'edit2/:postId', component: EditLuckComponent },
  { path: 'login', component: loginComponent },
  { path: 'signup', component: SignupComponent },

  // where to pick state
  { path: 'LotteryNumberGenMainPage', component: LotteryNumberGenMainPageComponent },
  // Florida Lottery Games Number Generators
  { path: 'FLGamePick', component: FLGamePickComponent },
  { path: 'FLPick2', component: FLPick2GenComponent },
  { path: 'FLPick3', component: Flpick3GenComponent },
  { path: 'FLPick4', component: Flpick4GenComponent },
  { path: 'FLPick5', component: Flpick5GenComponent },
  { path: 'luckyMoney', component: FlLuckyMoneyGenComponent },
  { path: 'fantasy5', component: FLFantasy5GenComponent },
  { path: 'cashForLife', component: CashForLifeComponent },
  { path: 'floridaLotto', component: FlLottoGenComponent },
  { path: 'megaMillions', component: MegaMillionsGenComponent },
  { path: 'powerBall', component: PowerBallGenComponent },

  // rules and odds pages
  { path: 'FLPick2RulesOdds', component: Flpick2RulesAndOddsComponent },
  { path: 'FLPick3RulesOdds', component: Pick3RulesAndOddsComponent },
  { path: 'FLPick4RulesOdds', component: Pick4RulesAndOddsComponent },
  { path: 'FLPick5RulesOdds', component: Pick5RulesAndOddsComponent },
  { path: 'winningNumbersStatePick', component: WinningNumbersMainComponent },
  {
    path: 'winningNumbersGamePick',
    component: FloridaWinningNumbersGamePickComponent
  },
  { path: 'FLPick2Winners', component: Pick2WinningNumbersComponent },
  { path: 'luckyMoneyInfo', component: LuckyMoneyRulesAndOddsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule {}
