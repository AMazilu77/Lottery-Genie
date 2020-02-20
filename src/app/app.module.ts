import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenieLampHomeComponent } from './genie-lamp-home/genie-lamp-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

// Services
import { LuckyNumberPostService } from './services/luckyNumberPost.service';

// Game specific lottery game number generator components
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
import { Pick2RulesComponent } from './games/state/Florida/flpick2-gen/pick2-rules/pick2-rules.component';
import { Pick2OddsComponent } from './games/state/Florida/flpick2-gen/pick2-odds/pick2-odds.component';
import { WinningNumbersMainComponent } from './winningNumber/winning-numbers-main-page/winning-numbers-main/winning-numbers-main.component';
// tslint:disable-next-line: max-line-length
import { FloridaWinningNumbersGamePickComponent } from './winningNumber/winning-by-state/Florida/florida-winning-numbers-game-pick/florida-winning-numbers-game-pick.component';
// tslint:disable-next-line: max-line-length
import { Pick2WinningNumbersComponent } from './winningNumber/winning-by-state/Florida/pick2-winning-numbers/pick2-winning-numbers.component';
import { Pick3RulesAndOddsComponent } from './games/state/Florida/flpick3-gen/pick3-rules-and-odds/pick3-rules-and-odds.component';
import { Pick3RulesComponent } from './games/state/Florida/flpick3-gen/pick3-rules/pick3-rules.component';
import { Pick3OddsComponent } from './games/state/Florida/flpick3-gen/pick3-odds/pick3-odds.component';
import { Pick2GameTheoryComponent } from './games/state/Florida/flpick2-gen/pick2-game-theory/pick2-game-theory.component';
import { Pick3GameTheoryComponent } from './games/state/Florida/flpick3-gen/pick3-game-theory/pick3-game-theory.component';
import { Pick4RulesAndOddsComponent } from './games/state/Florida/flpick4-gen/pick4-rules-and-odds/pick4-rules-and-odds.component';
import { Pick4RulesComponent } from './games/state/Florida/flpick4-gen/pick4-rules/pick4-rules.component';
import { Pick4OddsComponent } from './games/state/Florida/flpick4-gen/pick4-odds/pick4-odds.component';
import { Pick4GameTheoryComponent } from './games/state/Florida/flpick4-gen/pick4-game-theory/pick4-game-theory.component';
import { Pick5RulesAndOddsComponent } from './games/state/Florida/flpick5-gen/pick5-rules-and-odds/pick5-rules-and-odds.component';
import { Pick5RulesComponent } from './games/state/Florida/flpick5-gen/pick5-rules/pick5-rules.component';
import { Pick5OddsComponent } from './games/state/Florida/flpick5-gen/pick5-odds/pick5-odds.component';
import { Pick5GameTheoryComponent } from './games/state/Florida/flpick5-gen/pick5-game-theory/pick5-game-theory.component';

import { C4lRulesAndOddsComponent } from './games/state/Florida/cash-for-life/c4l-rules-and-odds/c4l-rules-and-odds.component';
import { C4lRulesComponent } from './games/state/Florida/cash-for-life/c4l-rules/c4l-rules.component';
import { C4lOddsComponent } from './games/state/Florida/cash-for-life/c4l-odds/c4l-odds.component';
import { C4lGametheoryComponent } from './games/state/Florida/cash-for-life/c4l-gametheory/c4l-gametheory.component';
import { FLLottoRulesAndOddsComponent } from './games/state/Florida/fl-lotto-gen/fl-lotto-rules-and-odds/fl-lotto-rules-and-odds.component';
import { FLLottoRulesComponent } from './games/state/Florida/fl-lotto-gen/fl-lotto-rules/fl-lotto-rules.component';
import { FLLottoOddsComponent } from './games/state/Florida/fl-lotto-gen/fl-lotto-odds/fl-lotto-odds.component';
import { FLLottoGameTheoryComponent } from './games/state/Florida/fl-lotto-gen/fl-lotto-game-theory/fl-lotto-game-theory.component';
// tslint:disable-next-line: max-line-length
import { Fantasy5RulesAndOddsComponent } from './games/state/Florida/flfantasy5-gen/fantasy5-rules-and-odds/fantasy5-rules-and-odds.component';
import { Fantasy5RulesComponent } from './games/state/Florida/flfantasy5-gen/fantasy5-rules/fantasy5-rules.component';
import { Fantasy5OddsComponent } from './games/state/Florida/flfantasy5-gen/fantasy5-odds/fantasy5-odds.component';
import { Fantasy5GameTheoryComponent } from './games/state/Florida/flfantasy5-gen/fantasy5-game-theory/fantasy5-game-theory.component';
// tslint:disable-next-line: max-line-length
import { LuckyMoneyRulesAndOddsComponent } from './games/state/Florida/fl-lucky-money-gen/lucky-money-rules-and-odds/lucky-money-rules-and-odds.component';
import { LuckyMoneyRulesComponent } from './games/state/Florida/fl-lucky-money-gen/lucky-money-rules/lucky-money-rules.component';
import { LuckyMoneyOddsComponent } from './games/state/Florida/fl-lucky-money-gen/lucky-money-odds/lucky-money-odds.component';
// tslint:disable-next-line:max-line-length
import { LuckyMoneyGameTheoryComponent } from './games/state/Florida/fl-lucky-money-gen/lucky-money-game-theory/lucky-money-game-theory.component';
// tslint:disable-next-line: max-line-length
import { MegaMillionsRulesAndOddsComponent } from './games/state/Florida/mega-millions-gen/mega-millions-rules-and-odds/mega-millions-rules-and-odds.component';
import { MegaMillionsRulesComponent } from './games/state/Florida/mega-millions-gen/mega-millions-rules/mega-millions-rules.component';
import { MegaMillionsOddsComponent } from './games/state/Florida/mega-millions-gen/mega-millions-odds/mega-millions-odds.component';
// tslint:disable-next-line: max-line-length
import { MegaMillionsGameTheoryComponent } from './games/state/Florida/mega-millions-gen/mega-millions-game-theory/mega-millions-game-theory.component';
// tslint:disable-next-line: max-line-length
import { PowerBallRulesAndOddsComponent } from './games/state/Florida/power-ball-gen/power-ball-rules-and-odds/power-ball-rules-and-odds.component';
import { PowerBallRulesComponent } from './games/state/Florida/power-ball-gen/power-ball-rules/power-ball-rules.component';
import { PowerBallOddsComponent } from './games/state/Florida/power-ball-gen/power-ball-odds/power-ball-odds.component';
import { PowerBallGameTheoryComponent } from './games/state/Florida/power-ball-gen/power-ball-game-theory/power-ball-game-theory.component';
import { CreateLuckyNumberComponent } from './my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component';
import { LuckyListComponent } from './my-profile/LuckyNumbers/listLucky/lucky-list/lucky-list.component';
import { LuckyNumberModel } from './my-profile/LuckyNumbers/luckNumbers.model';
// Modules
import { FormsModule } from '@angular/forms';

// Angular Inputs
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatExpansionModule } from '@angular/material';
import { PlayerStatsComponent } from './my-profile/Stats/player-stats/player-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    GenieLampHomeComponent,
    MyAboutComponent,
    DashBoardComponent,
    LotteryNumberGenMainPageComponent,
    FLGamePickComponent,
    FLPick2GenComponent,
    Flpick3GenComponent,
    Flpick4GenComponent,
    Flpick5GenComponent,
    FlLuckyMoneyGenComponent,
    FLFantasy5GenComponent,
    CashForLifeComponent,
    FlLottoGenComponent,
    MegaMillionsGenComponent,
    PowerBallGenComponent,
    MyProfileComponent,
    Flpick2RulesAndOddsComponent,
    Pick2RulesComponent,
    Pick2OddsComponent,
    WinningNumbersMainComponent,
    FloridaWinningNumbersGamePickComponent,
    Pick2WinningNumbersComponent,
    Pick3RulesAndOddsComponent,
    Pick3RulesComponent,
    Pick3OddsComponent,
    Pick2GameTheoryComponent,
    Pick3GameTheoryComponent,
    Pick4RulesAndOddsComponent,
    Pick4RulesComponent,
    Pick4OddsComponent,
    Pick4GameTheoryComponent,
    Pick5RulesAndOddsComponent,
    Pick5RulesComponent,
    Pick5OddsComponent,
    Pick5GameTheoryComponent,
    C4lRulesAndOddsComponent,
    C4lRulesComponent,
    C4lOddsComponent,
    C4lGametheoryComponent,
    FLLottoRulesAndOddsComponent,
    FLLottoRulesComponent,
    FLLottoOddsComponent,
    FLLottoGameTheoryComponent,
    Fantasy5RulesAndOddsComponent,
    Fantasy5RulesComponent,
    Fantasy5OddsComponent,
    Fantasy5GameTheoryComponent,
    LuckyMoneyRulesAndOddsComponent,
    LuckyMoneyRulesComponent,
    LuckyMoneyOddsComponent,
    LuckyMoneyGameTheoryComponent,
    MegaMillionsRulesAndOddsComponent,
    MegaMillionsRulesComponent,
    MegaMillionsOddsComponent,
    MegaMillionsGameTheoryComponent,
    PowerBallRulesAndOddsComponent,
    PowerBallRulesComponent,
    PowerBallOddsComponent,
    PowerBallGameTheoryComponent,
    CreateLuckyNumberComponent,
    LuckyListComponent,
    PlayerStatsComponent,

  ],
  imports: [BrowserModule,
            AppRoutingModule,
            FormsModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatCardModule,
            MatButtonModule,
            MatExpansionModule,
            HttpClientModule
          ],


            providers: [LuckyNumberPostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
