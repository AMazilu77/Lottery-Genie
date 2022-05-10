"use strict";
(self["webpackChunkThe_Lottery_Djinni"] = self["webpackChunkThe_Lottery_Djinni"] || []).push([["main"],{

/***/ 4786:
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMaterialModule": () => (/* binding */ AngularMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 6207);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
// Angular Inputs








class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule] }); })();


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _genie_lamp_home_genie_lamp_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genie-lamp-home/genie-lamp-home.component */ 353);
/* harmony import */ var _my_about_my_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-about/my-about.component */ 74);
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash-board/dash-board.component */ 1367);
/* harmony import */ var _games_lottery_number_gen_main_page_lottery_number_gen_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games/lottery-number-gen-main-page/lottery-number-gen-main-page.component */ 2951);
/* harmony import */ var _games_state_Florida_flgame_pick_flgame_pick_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games/state/Florida/flgame-pick/flgame-pick.component */ 4779);
/* harmony import */ var _games_state_Florida_flpick2_gen_flpick2_gen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/flpick2-gen.component */ 5314);
/* harmony import */ var _games_state_Florida_flpick3_gen_flpick3_gen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/flpick3-gen.component */ 3033);
/* harmony import */ var _games_state_Florida_flpick4_gen_flpick4_gen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/flpick4-gen.component */ 3363);
/* harmony import */ var _games_state_Florida_flpick5_gen_flpick5_gen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/flpick5-gen.component */ 4742);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_fl_lucky_money_gen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/fl-lucky-money-gen.component */ 2661);
/* harmony import */ var _games_state_Florida_flfantasy5_gen_flfantasy5_gen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./games/state/Florida/flfantasy5-gen/flfantasy5-gen.component */ 6067);
/* harmony import */ var _games_state_Florida_cash_for_life_cash_for_life_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/state/Florida/cash-for-life/cash-for-life.component */ 5945);
/* harmony import */ var _games_state_Florida_fl_lotto_gen_fl_lotto_gen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./games/state/Florida/fl-lotto-gen/fl-lotto-gen.component */ 3775);
/* harmony import */ var _games_state_Florida_mega_millions_gen_mega_millions_gen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./games/state/Florida/mega-millions-gen/mega-millions-gen.component */ 8341);
/* harmony import */ var _games_state_Florida_power_ball_gen_power_ball_gen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./games/state/Florida/power-ball-gen/power-ball-gen.component */ 1793);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 5908);
/* harmony import */ var _games_state_Florida_flpick2_gen_flpick2_rules_and_odds_flpick2_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/flpick2-rules-and-odds/flpick2-rules-and-odds.component */ 3779);
/* harmony import */ var _winningNumber_winning_numbers_main_page_winning_numbers_main_winning_numbers_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./winningNumber/winning-numbers-main-page/winning-numbers-main/winning-numbers-main.component */ 1641);
/* harmony import */ var _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_florida_winning_numbers_game_pick_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/florida-winning-numbers-game-pick.component */ 528);
/* harmony import */ var _games_state_Florida_flpick3_gen_pick3_rules_and_odds_pick3_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/pick3-rules-and-odds/pick3-rules-and-odds.component */ 8730);
/* harmony import */ var _games_state_Florida_flpick4_gen_pick4_rules_and_odds_pick4_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/pick4-rules-and-odds/pick4-rules-and-odds.component */ 8837);
/* harmony import */ var _games_state_Florida_flpick5_gen_pick5_rules_and_odds_pick5_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/pick5-rules-and-odds/pick5-rules-and-odds.component */ 8223);
/* harmony import */ var _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick2_winning_numbers_pick2_winning_numbers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/pick2-winning-numbers/pick2-winning-numbers.component */ 9405);
/* harmony import */ var _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick3_winning_numbers_pick3_winning_number_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/pick3-winning-numbers/pick3-winning-number.component */ 4090);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_lucky_money_rules_and_odds_lucky_money_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/lucky-money-rules-and-odds/lucky-money-rules-and-odds.component */ 7784);
/* harmony import */ var _my_profile_LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component */ 5356);
/* harmony import */ var _auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/login/auth.guard */ 5167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);























//  Winng Numbers Parts




// import { loginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // main app page options
    { path: 'home', component: _genie_lamp_home_genie_lamp_home_component__WEBPACK_IMPORTED_MODULE_0__.GenieLampHomeComponent },
    { path: 'about', component: _my_about_my_about_component__WEBPACK_IMPORTED_MODULE_1__.MyAboutComponent },
    { path: 'dashBoard', component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_2__.DashBoardComponent },
    { path: 'profile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_15__.MyProfileComponent, canActivate: [_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_26__.AuthGaurd] },
    { path: 'create', component: _my_profile_LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_25__.CreateLuckyNumberComponent, canActivate: [_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_26__.AuthGaurd] },
    { path: 'edit/:postId', component: _my_profile_LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_25__.CreateLuckyNumberComponent, canActivate: [_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_26__.AuthGaurd] },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule) },
    // where to pick state
    { path: 'LotteryNumberGenMainPage', component: _games_lottery_number_gen_main_page_lottery_number_gen_main_page_component__WEBPACK_IMPORTED_MODULE_3__.LotteryNumberGenMainPageComponent },
    // Florida Lottery Games Number Generators
    { path: 'FLGamePick', component: _games_state_Florida_flgame_pick_flgame_pick_component__WEBPACK_IMPORTED_MODULE_4__.FLGamePickComponent },
    { path: 'FLPick2', component: _games_state_Florida_flpick2_gen_flpick2_gen_component__WEBPACK_IMPORTED_MODULE_5__.FLPick2GenComponent },
    { path: 'FLPick3', component: _games_state_Florida_flpick3_gen_flpick3_gen_component__WEBPACK_IMPORTED_MODULE_6__.Flpick3GenComponent },
    { path: 'FLPick4', component: _games_state_Florida_flpick4_gen_flpick4_gen_component__WEBPACK_IMPORTED_MODULE_7__.Flpick4GenComponent },
    { path: 'FLPick5', component: _games_state_Florida_flpick5_gen_flpick5_gen_component__WEBPACK_IMPORTED_MODULE_8__.Flpick5GenComponent },
    { path: 'luckyMoney', component: _games_state_Florida_fl_lucky_money_gen_fl_lucky_money_gen_component__WEBPACK_IMPORTED_MODULE_9__.FlLuckyMoneyGenComponent },
    { path: 'fantasy5', component: _games_state_Florida_flfantasy5_gen_flfantasy5_gen_component__WEBPACK_IMPORTED_MODULE_10__.FLFantasy5GenComponent },
    { path: 'cashForLife', component: _games_state_Florida_cash_for_life_cash_for_life_component__WEBPACK_IMPORTED_MODULE_11__.CashForLifeComponent },
    { path: 'floridaLotto', component: _games_state_Florida_fl_lotto_gen_fl_lotto_gen_component__WEBPACK_IMPORTED_MODULE_12__.FlLottoGenComponent },
    { path: 'megaMillions', component: _games_state_Florida_mega_millions_gen_mega_millions_gen_component__WEBPACK_IMPORTED_MODULE_13__.MegaMillionsGenComponent },
    { path: 'powerBall', component: _games_state_Florida_power_ball_gen_power_ball_gen_component__WEBPACK_IMPORTED_MODULE_14__.PowerBallGenComponent },
    // rules and odds pages
    { path: 'FLPick2RulesOdds', component: _games_state_Florida_flpick2_gen_flpick2_rules_and_odds_flpick2_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_16__.Flpick2RulesAndOddsComponent },
    { path: 'FLPick3RulesOdds', component: _games_state_Florida_flpick3_gen_pick3_rules_and_odds_pick3_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_19__.Pick3RulesAndOddsComponent },
    { path: 'FLPick4RulesOdds', component: _games_state_Florida_flpick4_gen_pick4_rules_and_odds_pick4_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_20__.Pick4RulesAndOddsComponent },
    { path: 'FLPick5RulesOdds', component: _games_state_Florida_flpick5_gen_pick5_rules_and_odds_pick5_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_21__.Pick5RulesAndOddsComponent },
    { path: 'winningNumbersStatePick', component: _winningNumber_winning_numbers_main_page_winning_numbers_main_winning_numbers_main_component__WEBPACK_IMPORTED_MODULE_17__.WinningNumbersMainComponent },
    {
        path: 'winningNumbersGamePick',
        component: _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_florida_winning_numbers_game_pick_component__WEBPACK_IMPORTED_MODULE_18__.FloridaWinningNumbersGamePickComponent
    },
    { path: 'FLPick2Winners', component: _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick2_winning_numbers_pick2_winning_numbers_component__WEBPACK_IMPORTED_MODULE_22__.Pick2WinningNumbersComponent },
    { path: 'FLPick3Winners', component: _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick3_winning_numbers_pick3_winning_number_component__WEBPACK_IMPORTED_MODULE_23__.Pick3WinningNumbersComponent },
    { path: 'luckyMoneyInfo', component: _games_state_Florida_fl_lucky_money_gen_lucky_money_rules_and_odds_lucky_money_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_24__.LuckyMoneyRulesAndOddsComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_26__.AuthGaurd], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'The-Lottery-Djinni';
    }
    ngOnInit() {
        // kick off auto authentication workflow - keep auth going after refresh
        this.authService.autoAuthUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-material.module */ 4786);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _genie_lamp_home_genie_lamp_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genie-lamp-home/genie-lamp-home.component */ 353);
/* harmony import */ var _my_about_my_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-about/my-about.component */ 74);
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash-board/dash-board.component */ 1367);
/* harmony import */ var _services_luckyNumberPost_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/luckyNumberPost.service */ 8662);
/* harmony import */ var _games_lottery_number_gen_main_page_lottery_number_gen_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/lottery-number-gen-main-page/lottery-number-gen-main-page.component */ 2951);
/* harmony import */ var _games_state_Florida_flgame_pick_flgame_pick_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./games/state/Florida/flgame-pick/flgame-pick.component */ 4779);
/* harmony import */ var _games_state_Florida_flpick2_gen_flpick2_gen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/flpick2-gen.component */ 5314);
/* harmony import */ var _games_state_Florida_flpick3_gen_flpick3_gen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/flpick3-gen.component */ 3033);
/* harmony import */ var _games_state_Florida_flpick4_gen_flpick4_gen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/flpick4-gen.component */ 3363);
/* harmony import */ var _games_state_Florida_flpick5_gen_flpick5_gen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/flpick5-gen.component */ 4742);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_fl_lucky_money_gen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/fl-lucky-money-gen.component */ 2661);
/* harmony import */ var _games_state_Florida_flfantasy5_gen_flfantasy5_gen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./games/state/Florida/flfantasy5-gen/flfantasy5-gen.component */ 6067);
/* harmony import */ var _games_state_Florida_cash_for_life_cash_for_life_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./games/state/Florida/cash-for-life/cash-for-life.component */ 5945);
/* harmony import */ var _games_state_Florida_fl_lotto_gen_fl_lotto_gen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./games/state/Florida/fl-lotto-gen/fl-lotto-gen.component */ 3775);
/* harmony import */ var _games_state_Florida_mega_millions_gen_mega_millions_gen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./games/state/Florida/mega-millions-gen/mega-millions-gen.component */ 8341);
/* harmony import */ var _games_state_Florida_power_ball_gen_power_ball_gen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./games/state/Florida/power-ball-gen/power-ball-gen.component */ 1793);
/* harmony import */ var _games_state_Florida_flpick2_gen_flpick2_rules_and_odds_flpick2_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/flpick2-rules-and-odds/flpick2-rules-and-odds.component */ 3779);
/* harmony import */ var _games_state_Florida_flpick2_gen_pick2_rules_pick2_rules_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/pick2-rules/pick2-rules.component */ 4131);
/* harmony import */ var _games_state_Florida_flpick2_gen_pick2_odds_pick2_odds_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/pick2-odds/pick2-odds.component */ 9577);
/* harmony import */ var _winningNumber_winning_numbers_main_page_winning_numbers_main_winning_numbers_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./winningNumber/winning-numbers-main-page/winning-numbers-main/winning-numbers-main.component */ 1641);
/* harmony import */ var _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_florida_winning_numbers_game_pick_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/florida-winning-numbers-game-pick.component */ 528);
/* harmony import */ var _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick2_winning_numbers_pick2_winning_numbers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/pick2-winning-numbers/pick2-winning-numbers.component */ 9405);
/* harmony import */ var _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick3_winning_numbers_pick3_winning_number_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/pick3-winning-numbers/pick3-winning-number.component */ 4090);
/* harmony import */ var _games_state_Florida_flpick3_gen_pick3_rules_and_odds_pick3_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/pick3-rules-and-odds/pick3-rules-and-odds.component */ 8730);
/* harmony import */ var _games_state_Florida_flpick3_gen_pick3_rules_pick3_rules_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/pick3-rules/pick3-rules.component */ 2346);
/* harmony import */ var _games_state_Florida_flpick3_gen_pick3_odds_pick3_odds_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/pick3-odds/pick3-odds.component */ 3804);
/* harmony import */ var _games_state_Florida_flpick2_gen_pick2_game_theory_pick2_game_theory_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./games/state/Florida/flpick2-gen/pick2-game-theory/pick2-game-theory.component */ 6874);
/* harmony import */ var _games_state_Florida_flpick3_gen_pick3_game_theory_pick3_game_theory_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./games/state/Florida/flpick3-gen/pick3-game-theory/pick3-game-theory.component */ 2991);
/* harmony import */ var _games_state_Florida_flpick4_gen_pick4_rules_and_odds_pick4_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/pick4-rules-and-odds/pick4-rules-and-odds.component */ 8837);
/* harmony import */ var _games_state_Florida_flpick4_gen_pick4_rules_pick4_rules_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/pick4-rules/pick4-rules.component */ 1285);
/* harmony import */ var _games_state_Florida_flpick4_gen_pick4_odds_pick4_odds_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/pick4-odds/pick4-odds.component */ 5598);
/* harmony import */ var _games_state_Florida_flpick4_gen_pick4_game_theory_pick4_game_theory_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./games/state/Florida/flpick4-gen/pick4-game-theory/pick4-game-theory.component */ 5491);
/* harmony import */ var _games_state_Florida_flpick5_gen_pick5_rules_and_odds_pick5_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/pick5-rules-and-odds/pick5-rules-and-odds.component */ 8223);
/* harmony import */ var _games_state_Florida_flpick5_gen_pick5_rules_pick5_rules_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/pick5-rules/pick5-rules.component */ 3900);
/* harmony import */ var _games_state_Florida_flpick5_gen_pick5_odds_pick5_odds_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/pick5-odds/pick5-odds.component */ 2464);
/* harmony import */ var _games_state_Florida_flpick5_gen_pick5_game_theory_pick5_game_theory_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./games/state/Florida/flpick5-gen/pick5-game-theory/pick5-game-theory.component */ 4386);
/* harmony import */ var _games_state_Florida_cash_for_life_c4l_rules_and_odds_c4l_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./games/state/Florida/cash-for-life/c4l-rules-and-odds/c4l-rules-and-odds.component */ 5765);
/* harmony import */ var _games_state_Florida_cash_for_life_c4l_rules_c4l_rules_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./games/state/Florida/cash-for-life/c4l-rules/c4l-rules.component */ 7878);
/* harmony import */ var _games_state_Florida_cash_for_life_c4l_odds_c4l_odds_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./games/state/Florida/cash-for-life/c4l-odds/c4l-odds.component */ 8705);
/* harmony import */ var _games_state_Florida_cash_for_life_c4l_gametheory_c4l_gametheory_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./games/state/Florida/cash-for-life/c4l-gametheory/c4l-gametheory.component */ 195);
/* harmony import */ var _games_state_Florida_fl_lotto_gen_fl_lotto_rules_and_odds_fl_lotto_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./games/state/Florida/fl-lotto-gen/fl-lotto-rules-and-odds/fl-lotto-rules-and-odds.component */ 4513);
/* harmony import */ var _games_state_Florida_fl_lotto_gen_fl_lotto_rules_fl_lotto_rules_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./games/state/Florida/fl-lotto-gen/fl-lotto-rules/fl-lotto-rules.component */ 6183);
/* harmony import */ var _games_state_Florida_fl_lotto_gen_fl_lotto_odds_fl_lotto_odds_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./games/state/Florida/fl-lotto-gen/fl-lotto-odds/fl-lotto-odds.component */ 3204);
/* harmony import */ var _games_state_Florida_fl_lotto_gen_fl_lotto_game_theory_fl_lotto_game_theory_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./games/state/Florida/fl-lotto-gen/fl-lotto-game-theory/fl-lotto-game-theory.component */ 6796);
/* harmony import */ var _games_state_Florida_flfantasy5_gen_fantasy5_rules_and_odds_fantasy5_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./games/state/Florida/flfantasy5-gen/fantasy5-rules-and-odds/fantasy5-rules-and-odds.component */ 9429);
/* harmony import */ var _games_state_Florida_flfantasy5_gen_fantasy5_rules_fantasy5_rules_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./games/state/Florida/flfantasy5-gen/fantasy5-rules/fantasy5-rules.component */ 4736);
/* harmony import */ var _games_state_Florida_flfantasy5_gen_fantasy5_odds_fantasy5_odds_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./games/state/Florida/flfantasy5-gen/fantasy5-odds/fantasy5-odds.component */ 9823);
/* harmony import */ var _games_state_Florida_flfantasy5_gen_fantasy5_game_theory_fantasy5_game_theory_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./games/state/Florida/flfantasy5-gen/fantasy5-game-theory/fantasy5-game-theory.component */ 1688);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_lucky_money_rules_and_odds_lucky_money_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/lucky-money-rules-and-odds/lucky-money-rules-and-odds.component */ 7784);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_lucky_money_rules_lucky_money_rules_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/lucky-money-rules/lucky-money-rules.component */ 9436);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_lucky_money_odds_lucky_money_odds_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/lucky-money-odds/lucky-money-odds.component */ 522);
/* harmony import */ var _games_state_Florida_fl_lucky_money_gen_lucky_money_game_theory_lucky_money_game_theory_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./games/state/Florida/fl-lucky-money-gen/lucky-money-game-theory/lucky-money-game-theory.component */ 4056);
/* harmony import */ var _games_state_Florida_mega_millions_gen_mega_millions_rules_and_odds_mega_millions_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./games/state/Florida/mega-millions-gen/mega-millions-rules-and-odds/mega-millions-rules-and-odds.component */ 4107);
/* harmony import */ var _games_state_Florida_mega_millions_gen_mega_millions_rules_mega_millions_rules_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./games/state/Florida/mega-millions-gen/mega-millions-rules/mega-millions-rules.component */ 6941);
/* harmony import */ var _games_state_Florida_mega_millions_gen_mega_millions_odds_mega_millions_odds_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./games/state/Florida/mega-millions-gen/mega-millions-odds/mega-millions-odds.component */ 271);
/* harmony import */ var _games_state_Florida_mega_millions_gen_mega_millions_game_theory_mega_millions_game_theory_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./games/state/Florida/mega-millions-gen/mega-millions-game-theory/mega-millions-game-theory.component */ 6905);
/* harmony import */ var _games_state_Florida_power_ball_gen_power_ball_rules_and_odds_power_ball_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./games/state/Florida/power-ball-gen/power-ball-rules-and-odds/power-ball-rules-and-odds.component */ 6528);
/* harmony import */ var _games_state_Florida_power_ball_gen_power_ball_rules_power_ball_rules_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./games/state/Florida/power-ball-gen/power-ball-rules/power-ball-rules.component */ 2550);
/* harmony import */ var _games_state_Florida_power_ball_gen_power_ball_odds_power_ball_odds_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./games/state/Florida/power-ball-gen/power-ball-odds/power-ball-odds.component */ 8958);
/* harmony import */ var _games_state_Florida_power_ball_gen_power_ball_game_theory_power_ball_game_theory_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./games/state/Florida/power-ball-gen/power-ball-game-theory/power-ball-game-theory.component */ 7422);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./auth/auth-interceptor */ 762);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./error-interceptor */ 3270);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _posts_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./posts.module */ 8328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/core */ 3184);
// modules 





// app main components




// Services

// Game specific lottery game number generator components















// WInning Numbers 














































// import { AuthModule } from './auth/auth.module';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_67__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_67__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_68__.HTTP_INTERCEPTORS, useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_63__.AuthInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_68__.HTTP_INTERCEPTORS, useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_64__.ErrorIntercept, multi: true },
        _services_luckyNumberPost_service__WEBPACK_IMPORTED_MODULE_6__.LuckyNumberPostService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_69__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _posts_module__WEBPACK_IMPORTED_MODULE_66__.PostsModule,
            _angular_material_module__WEBPACK_IMPORTED_MODULE_1__.AngularMaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_68__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_70__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_67__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _genie_lamp_home_genie_lamp_home_component__WEBPACK_IMPORTED_MODULE_3__.GenieLampHomeComponent,
        _my_about_my_about_component__WEBPACK_IMPORTED_MODULE_4__.MyAboutComponent,
        _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__.DashBoardComponent,
        _games_lottery_number_gen_main_page_lottery_number_gen_main_page_component__WEBPACK_IMPORTED_MODULE_7__.LotteryNumberGenMainPageComponent,
        _games_state_Florida_flgame_pick_flgame_pick_component__WEBPACK_IMPORTED_MODULE_8__.FLGamePickComponent,
        _games_state_Florida_flpick2_gen_flpick2_gen_component__WEBPACK_IMPORTED_MODULE_9__.FLPick2GenComponent,
        _games_state_Florida_flpick3_gen_flpick3_gen_component__WEBPACK_IMPORTED_MODULE_10__.Flpick3GenComponent,
        _games_state_Florida_flpick4_gen_flpick4_gen_component__WEBPACK_IMPORTED_MODULE_11__.Flpick4GenComponent,
        _games_state_Florida_flpick5_gen_flpick5_gen_component__WEBPACK_IMPORTED_MODULE_12__.Flpick5GenComponent,
        _games_state_Florida_fl_lucky_money_gen_fl_lucky_money_gen_component__WEBPACK_IMPORTED_MODULE_13__.FlLuckyMoneyGenComponent,
        _games_state_Florida_flfantasy5_gen_flfantasy5_gen_component__WEBPACK_IMPORTED_MODULE_14__.FLFantasy5GenComponent,
        _games_state_Florida_cash_for_life_cash_for_life_component__WEBPACK_IMPORTED_MODULE_15__.CashForLifeComponent,
        _games_state_Florida_fl_lotto_gen_fl_lotto_gen_component__WEBPACK_IMPORTED_MODULE_16__.FlLottoGenComponent,
        _games_state_Florida_mega_millions_gen_mega_millions_gen_component__WEBPACK_IMPORTED_MODULE_17__.MegaMillionsGenComponent,
        _games_state_Florida_power_ball_gen_power_ball_gen_component__WEBPACK_IMPORTED_MODULE_18__.PowerBallGenComponent,
        _games_state_Florida_flpick2_gen_flpick2_rules_and_odds_flpick2_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_19__.Flpick2RulesAndOddsComponent,
        _games_state_Florida_flpick2_gen_pick2_rules_pick2_rules_component__WEBPACK_IMPORTED_MODULE_20__.Pick2RulesComponent,
        _games_state_Florida_flpick2_gen_pick2_odds_pick2_odds_component__WEBPACK_IMPORTED_MODULE_21__.Pick2OddsComponent,
        // winning numbers stuff 
        _winningNumber_winning_numbers_main_page_winning_numbers_main_winning_numbers_main_component__WEBPACK_IMPORTED_MODULE_22__.WinningNumbersMainComponent,
        _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_florida_winning_numbers_game_pick_component__WEBPACK_IMPORTED_MODULE_23__.FloridaWinningNumbersGamePickComponent,
        _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick2_winning_numbers_pick2_winning_numbers_component__WEBPACK_IMPORTED_MODULE_24__.Pick2WinningNumbersComponent,
        _winningNumber_winning_by_state_Florida_fl_winning_numbers_game_pick_pick3_winning_numbers_pick3_winning_number_component__WEBPACK_IMPORTED_MODULE_25__.Pick3WinningNumbersComponent,
        _games_state_Florida_flpick3_gen_pick3_rules_and_odds_pick3_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_26__.Pick3RulesAndOddsComponent,
        _games_state_Florida_flpick3_gen_pick3_rules_pick3_rules_component__WEBPACK_IMPORTED_MODULE_27__.Pick3RulesComponent,
        _games_state_Florida_flpick3_gen_pick3_odds_pick3_odds_component__WEBPACK_IMPORTED_MODULE_28__.Pick3OddsComponent,
        _games_state_Florida_flpick2_gen_pick2_game_theory_pick2_game_theory_component__WEBPACK_IMPORTED_MODULE_29__.Pick2GameTheoryComponent,
        _games_state_Florida_flpick3_gen_pick3_game_theory_pick3_game_theory_component__WEBPACK_IMPORTED_MODULE_30__.Pick3GameTheoryComponent,
        _games_state_Florida_flpick4_gen_pick4_rules_and_odds_pick4_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_31__.Pick4RulesAndOddsComponent,
        _games_state_Florida_flpick4_gen_pick4_rules_pick4_rules_component__WEBPACK_IMPORTED_MODULE_32__.Pick4RulesComponent,
        _games_state_Florida_flpick4_gen_pick4_odds_pick4_odds_component__WEBPACK_IMPORTED_MODULE_33__.Pick4OddsComponent,
        _games_state_Florida_flpick4_gen_pick4_game_theory_pick4_game_theory_component__WEBPACK_IMPORTED_MODULE_34__.Pick4GameTheoryComponent,
        _games_state_Florida_flpick5_gen_pick5_rules_and_odds_pick5_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_35__.Pick5RulesAndOddsComponent,
        _games_state_Florida_flpick5_gen_pick5_rules_pick5_rules_component__WEBPACK_IMPORTED_MODULE_36__.Pick5RulesComponent,
        _games_state_Florida_flpick5_gen_pick5_odds_pick5_odds_component__WEBPACK_IMPORTED_MODULE_37__.Pick5OddsComponent,
        _games_state_Florida_flpick5_gen_pick5_game_theory_pick5_game_theory_component__WEBPACK_IMPORTED_MODULE_38__.Pick5GameTheoryComponent,
        _games_state_Florida_cash_for_life_c4l_rules_and_odds_c4l_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_39__.C4lRulesAndOddsComponent,
        _games_state_Florida_cash_for_life_c4l_rules_c4l_rules_component__WEBPACK_IMPORTED_MODULE_40__.C4lRulesComponent,
        _games_state_Florida_cash_for_life_c4l_odds_c4l_odds_component__WEBPACK_IMPORTED_MODULE_41__.C4lOddsComponent,
        _games_state_Florida_cash_for_life_c4l_gametheory_c4l_gametheory_component__WEBPACK_IMPORTED_MODULE_42__.C4lGametheoryComponent,
        _games_state_Florida_fl_lotto_gen_fl_lotto_rules_and_odds_fl_lotto_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_43__.FLLottoRulesAndOddsComponent,
        _games_state_Florida_fl_lotto_gen_fl_lotto_rules_fl_lotto_rules_component__WEBPACK_IMPORTED_MODULE_44__.FLLottoRulesComponent,
        _games_state_Florida_fl_lotto_gen_fl_lotto_odds_fl_lotto_odds_component__WEBPACK_IMPORTED_MODULE_45__.FLLottoOddsComponent,
        _games_state_Florida_fl_lotto_gen_fl_lotto_game_theory_fl_lotto_game_theory_component__WEBPACK_IMPORTED_MODULE_46__.FLLottoGameTheoryComponent,
        _games_state_Florida_flfantasy5_gen_fantasy5_rules_and_odds_fantasy5_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_47__.Fantasy5RulesAndOddsComponent,
        _games_state_Florida_flfantasy5_gen_fantasy5_rules_fantasy5_rules_component__WEBPACK_IMPORTED_MODULE_48__.Fantasy5RulesComponent,
        _games_state_Florida_flfantasy5_gen_fantasy5_odds_fantasy5_odds_component__WEBPACK_IMPORTED_MODULE_49__.Fantasy5OddsComponent,
        _games_state_Florida_flfantasy5_gen_fantasy5_game_theory_fantasy5_game_theory_component__WEBPACK_IMPORTED_MODULE_50__.Fantasy5GameTheoryComponent,
        _games_state_Florida_fl_lucky_money_gen_lucky_money_rules_and_odds_lucky_money_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_51__.LuckyMoneyRulesAndOddsComponent,
        _games_state_Florida_fl_lucky_money_gen_lucky_money_rules_lucky_money_rules_component__WEBPACK_IMPORTED_MODULE_52__.LuckyMoneyRulesComponent,
        _games_state_Florida_fl_lucky_money_gen_lucky_money_odds_lucky_money_odds_component__WEBPACK_IMPORTED_MODULE_53__.LuckyMoneyOddsComponent,
        _games_state_Florida_fl_lucky_money_gen_lucky_money_game_theory_lucky_money_game_theory_component__WEBPACK_IMPORTED_MODULE_54__.LuckyMoneyGameTheoryComponent,
        _games_state_Florida_mega_millions_gen_mega_millions_rules_and_odds_mega_millions_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_55__.MegaMillionsRulesAndOddsComponent,
        _games_state_Florida_mega_millions_gen_mega_millions_rules_mega_millions_rules_component__WEBPACK_IMPORTED_MODULE_56__.MegaMillionsRulesComponent,
        _games_state_Florida_mega_millions_gen_mega_millions_odds_mega_millions_odds_component__WEBPACK_IMPORTED_MODULE_57__.MegaMillionsOddsComponent,
        _games_state_Florida_mega_millions_gen_mega_millions_game_theory_mega_millions_game_theory_component__WEBPACK_IMPORTED_MODULE_58__.MegaMillionsGameTheoryComponent,
        _games_state_Florida_power_ball_gen_power_ball_rules_and_odds_power_ball_rules_and_odds_component__WEBPACK_IMPORTED_MODULE_59__.PowerBallRulesAndOddsComponent,
        _games_state_Florida_power_ball_gen_power_ball_rules_power_ball_rules_component__WEBPACK_IMPORTED_MODULE_60__.PowerBallRulesComponent,
        _games_state_Florida_power_ball_gen_power_ball_odds_power_ball_odds_component__WEBPACK_IMPORTED_MODULE_61__.PowerBallOddsComponent,
        _games_state_Florida_power_ball_gen_power_ball_game_theory_power_ball_game_theory_component__WEBPACK_IMPORTED_MODULE_62__.PowerBallGameTheoryComponent,
        _error_error_component__WEBPACK_IMPORTED_MODULE_65__.ErrorComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_69__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _posts_module__WEBPACK_IMPORTED_MODULE_66__.PostsModule,
        _angular_material_module__WEBPACK_IMPORTED_MODULE_1__.AngularMaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_68__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_70__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 762:
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);


// manipulate incoming request and add token to headers
class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/user/';
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        // this subject will push authentication information to the components interested
        this.authStatusListening = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getAuthStatusListener() {
        return this.authStatusListening.asObservable();
    }
    getUserId() {
        return this.userId;
    }
    createUser(email, password) {
        const authData = { email: email, password: password };
        this.http.post(BACKEND_URL + "/signup", authData)
            .subscribe(response => {
            console.log(response);
        });
        this.router.navigate(['/auth/login']);
    }
    login(email, password) {
        const authData = { email: email, password: password };
        this.http.post(BACKEND_URL + "login", authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.userId);
                this.authStatusListening.next(true);
                // this.router.navigate(['/dashBoard']);
            }
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListening.next(true);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        // pass information
        this.authStatusListening.next(false);
        this.router.navigate(['/']);
        this.userId = null;
        this.clearAuthData();
        clearTimeout(this.tokenTimer);
    }
    setAuthTimer(duration) {
        console.log('setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    // store data to local storange so you dont have to log in every time the page refreshes
    saveAuthData(token, expirationDate, userId) {
        localStorage.setItem('token', token),
            localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
    }
    clearAuthData() {
        localStorage.removeItem('token'),
            localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        if (!token && !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5167:
/*!******************************************!*\
  !*** ./src/app/auth/login/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGaurd": () => (/* binding */ AuthGaurd)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthGaurd {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/auth/login']);
        }
        return isAuth;
    }
}
AuthGaurd.ɵfac = function AuthGaurd_Factory(t) { return new (t || AuthGaurd)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGaurd.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGaurd, factory: AuthGaurd.ɵfac });


/***/ }),

/***/ 1367:
/*!****************************************************!*\
  !*** ./src/app/dash-board/dash-board.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashBoardComponent": () => (/* binding */ DashBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);





function DashBoardComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashBoardComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.gotoProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " My profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashBoardComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashBoardComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashBoardComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
// import { AuthService } from '../services/auth.service';
class DashBoardComponent {
    constructor(authService, theRouter) {
        this.authService = authService;
        this.theRouter = theRouter;
        this.userIsAuthentic = false;
        this.randomPhrase = ['Create an account and log in to save numbers and keep track of lucky numbers stats.', 'How may I serve you?', 'What is your feeble request?',
            'You only get 3 wishes', 'Greed is Good.', 'Login to access full features', 'I can teach you about game theory, statistics and probability, you need only wish it!', 'Get on with it, mortal', '',
            'Allow for notifications and I will alert you any time a number you played and saved wins.', 'Create an account and log in to to enjoy the full features.'];
        this.DashBoard = [];
    }
    ngOnInit() {
        this.userIsAuthentic = this.authService.getIsAuth();
        this.authListenerSubscription = this.authService.getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthentic = isAuthenticated;
        });
        // this._DashBoardService.getDash()
        //   .subscribe(
        //     res => this.DashBoard = res,
        //     err => {
        //       if (err instanceof HttpErrorResponse) {
        //         if (err.status === 401) {
        //           this._router.navigate(['/login']);
        //         }
        //       }
        //     }
        //   );
        this.randomPhraseGen();
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authListenerSubscription.unsubscribe();
    }
    gotoWinningNums() {
        this.theRouter.navigate(['/winningNumbersStatePick']);
    }
    gotoGenerator() {
        this.theRouter.navigate(['/LotteryNumberGenMainPage']);
    }
    // gotoPlayedHistory() {
    //   this._router.navigate(['/PlayedNumbersHistory']);
    // }
    gotoProfile() {
        this.theRouter.navigate(['/profile']);
    }
    randomPhraseGen() {
        this.phraseNumber = Math.floor(Math.random() * this.randomPhrase.length);
        console.log(this.phraseNumber);
        if (this.phraseNumber === 1) {
            this.Phrase = this.randomPhrase[0];
        }
        if (this.phraseNumber === 2) {
            this.Phrase = this.randomPhrase[1];
        }
        if (this.phraseNumber === 3) {
            this.Phrase = this.randomPhrase[2];
        }
        if (this.phraseNumber === 4) {
            this.Phrase = this.randomPhrase[3];
        }
        if (this.phraseNumber === 5) {
            this.Phrase = this.randomPhrase[4];
        }
        if (this.phraseNumber === 6) {
            this.Phrase = this.randomPhrase[5];
        }
        if (this.phraseNumber === 7) {
            this.Phrase = this.randomPhrase[6];
        }
        if (this.phraseNumber === 8) {
            this.Phrase = this.randomPhrase[7];
        }
        if (this.phraseNumber === 9) {
            this.Phrase = this.randomPhrase[8];
        }
        if (this.phraseNumber === 10) {
            this.Phrase = this.randomPhrase[9];
        }
        if (this.phraseNumber === 11) {
            this.Phrase = this.randomPhrase[10];
        }
        if (this.phraseNumber === 12) {
            this.Phrase = this.randomPhrase[11];
        }
        if (this.phraseNumber === 13) {
            this.Phrase = this.randomPhrase[12];
        }
        if (this.phraseNumber === 14) {
            this.Phrase = this.randomPhrase[13];
        }
        if (this.phraseNumber === 15) {
            this.Phrase = this.randomPhrase[14];
        }
        if (this.phraseNumber === 16) {
            this.Phrase = this.randomPhrase[15];
        }
        console.log(this.Phrase);
    }
}
DashBoardComponent.ɵfac = function DashBoardComponent_Factory(t) { return new (t || DashBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
DashBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashBoardComponent, selectors: [["app-dash-board"]], decls: 22, vars: 4, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "integrity", "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", "crossorigin", "anonymous"], ["id", "genietext", "flex", "50", "layout-align", "center", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "genie-dashboard-render", "src", "../assets/public/images/MainGenie.jpg"], [1, "button-container"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", "class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/auth/login", "routerLinkActive", "mat-accent", "type", "button", "class", "btn btn-outline-primary", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["mat-button", "", "routerLink", "/auth/login", "routerLinkActive", "mat-accent", "type", "button", 1, "btn", "btn-outline-primary"]], template: function DashBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body")(3, "div", 1)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Why have you summoned me, Mortal? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br")(8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4)(15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashBoardComponent_Template_button_click_15_listener() { return ctx.gotoGenerator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Give me numbers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashBoardComponent_Template_button_click_17_listener() { return ctx.gotoWinningNums(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Show numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DashBoardComponent_button_19_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DashBoardComponent_button_20_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DashBoardComponent_button_21_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Phrase, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsAuthentic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsAuthentic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userIsAuthentic);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: [".button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.genietext[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#genie-dashboard-render[_ngcontent-%COMP%] {\n  height: 300px;\n  width: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\np[_ngcontent-%COMP%] {\n  font-style: italic;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9kYXNoLWJvYXJkL2Rhc2gtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEYiLCJmaWxlIjoiZGFzaC1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG59XG5cbi5nZW5pZXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG59XG5cbiNnZW5pZS1kYXNoYm9hcmQtcmVuZGVye1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5idG4ge1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2VuaWV0ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNnZW5pZS1kYXNoYm9hcmQtcmVuZGVyIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbnAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 3270:
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorIntercept": () => (/* binding */ ErrorIntercept)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);





// manipulate incoming request 
class ErrorIntercept {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        // handle method gives back the response observerable stream
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            let errorMessage = 'An unknown error occured.';
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent, { data: { message: errorMessage } });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorIntercept.ɵfac = function ErrorIntercept_Factory(t) { return new (t || ErrorIntercept)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
ErrorIntercept.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorIntercept, factory: ErrorIntercept.ɵfac });


/***/ }),

/***/ 9983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);




class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["ng-component"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["mat-button", "", "mat-dialog-close", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " An Error Occured! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ok ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], encapsulation: 2 });


/***/ }),

/***/ 2951:
/*!**********************************************************************************************!*\
  !*** ./src/app/games/lottery-number-gen-main-page/lottery-number-gen-main-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LotteryNumberGenMainPageComponent": () => (/* binding */ LotteryNumberGenMainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class LotteryNumberGenMainPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/dashBoard']);
    }
}
LotteryNumberGenMainPageComponent.ɵfac = function LotteryNumberGenMainPageComponent_Factory(t) { return new (t || LotteryNumberGenMainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
LotteryNumberGenMainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LotteryNumberGenMainPageComponent, selectors: [["app-lottery-number-gen-main-page"]], decls: 17, vars: 0, consts: [[1, "btn", "btn-outline-primary", 3, "click"], ["id", "state", "flex", "50", "layout-align", "center", 1, "pagination", "justify-content-center"], ["id", "list", "flex", "50", "layout-align", "center", 1, "pagination", "justify-content-center"], ["href", "/FLGamePick"]], template: function LotteryNumberGenMainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LotteryNumberGenMainPageComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I can generate a number for any lottery game in any state! Pick a state and then pick a game.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br")(9, "br")(10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "ol")(13, "h3")(14, "li")(15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Florida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3R0ZXJ5LW51bWJlci1nZW4tbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 195:
/*!**********************************************************************************************!*\
  !*** ./src/app/games/state/Florida/cash-for-life/c4l-gametheory/c4l-gametheory.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4lGametheoryComponent": () => (/* binding */ C4lGametheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class C4lGametheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
C4lGametheoryComponent.ɵfac = function C4lGametheoryComponent_Factory(t) { return new (t || C4lGametheoryComponent)(); };
C4lGametheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C4lGametheoryComponent, selectors: [["app-c4l-gametheory"]], decls: 2, vars: 0, template: function C4lGametheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " c4l-gametheory works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjNGwtZ2FtZXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 8705:
/*!**********************************************************************************!*\
  !*** ./src/app/games/state/Florida/cash-for-life/c4l-odds/c4l-odds.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4lOddsComponent": () => (/* binding */ C4lOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class C4lOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
C4lOddsComponent.ɵfac = function C4lOddsComponent_Factory(t) { return new (t || C4lOddsComponent)(); };
C4lOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C4lOddsComponent, selectors: [["app-c4l-odds"]], decls: 2, vars: 0, template: function C4lOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " c4l-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjNGwtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 5765:
/*!******************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/cash-for-life/c4l-rules-and-odds/c4l-rules-and-odds.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4lRulesAndOddsComponent": () => (/* binding */ C4lRulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _c4l_rules_c4l_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../c4l-rules/c4l-rules.component */ 7878);
/* harmony import */ var _c4l_odds_c4l_odds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../c4l-odds/c4l-odds.component */ 8705);
/* harmony import */ var _c4l_gametheory_c4l_gametheory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../c4l-gametheory/c4l-gametheory.component */ 195);






function C4lRulesAndOddsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-c4l-rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.hidden);
} }
function C4lRulesAndOddsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-c4l-odds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r1.hidden);
} }
function C4lRulesAndOddsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-c4l-gametheory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r2.hidden);
} }
class C4lRulesAndOddsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/FLPick5']);
    }
    ngOnInit() { }
}
C4lRulesAndOddsComponent.ɵfac = function C4lRulesAndOddsComponent_Factory(t) { return new (t || C4lRulesAndOddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
C4lRulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: C4lRulesAndOddsComponent, selectors: [["app-c4l-rules-and-odds"]], decls: 25, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["class", "pagination justify-content-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "pagination", "justify-content-center", 3, "hidden"]], template: function C4lRulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function C4lRulesAndOddsComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Florida Pick 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Florida Cash For Life rules & odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, C4lRulesAndOddsComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, C4lRulesAndOddsComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, C4lRulesAndOddsComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "img", 4)(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\"What arcane knowledge dost thou seek, mortal?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function C4lRulesAndOddsComponent_Template_button_click_19_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Tell me about the rules for this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function C4lRulesAndOddsComponent_Template_button_click_21_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Tell me about the odds and probability");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function C4lRulesAndOddsComponent_Template_button_click_23_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tell me about the game theory involved with this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show1)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", ctx.elseBlock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _c4l_rules_c4l_rules_component__WEBPACK_IMPORTED_MODULE_0__.C4lRulesComponent, _c4l_odds_c4l_odds_component__WEBPACK_IMPORTED_MODULE_1__.C4lOddsComponent, _c4l_gametheory_c4l_gametheory_component__WEBPACK_IMPORTED_MODULE_2__.C4lGametheoryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjNGwtcnVsZXMtYW5kLW9kZHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 7878:
/*!************************************************************************************!*\
  !*** ./src/app/games/state/Florida/cash-for-life/c4l-rules/c4l-rules.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4lRulesComponent": () => (/* binding */ C4lRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class C4lRulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
C4lRulesComponent.ɵfac = function C4lRulesComponent_Factory(t) { return new (t || C4lRulesComponent)(); };
C4lRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C4lRulesComponent, selectors: [["app-c4l-rules"]], decls: 2, vars: 0, template: function C4lRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " c4l-rules works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjNGwtcnVsZXMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 5945:
/*!******************************************************************************!*\
  !*** ./src/app/games/state/Florida/cash-for-life/cash-for-life.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashForLifeComponent": () => (/* binding */ CashForLifeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class CashForLifeComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.cashForLifeSavedNumbers = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GenerateCashForLife() {
        console.log(this.numberGenService.cashForLifeRandomGenMaster());
    }
    saveCashForLifeNumber() {
        this.cashForLifeSavedNumbers.push(this.numberGenService.cashForLifenum1, this.numberGenService.cashForLifenum2, this.numberGenService.cashForLifenum3, this.numberGenService.cashForLifenum4, this.numberGenService.cashForLifenum5);
        console.log(this.cashForLifeSavedNumbers);
    }
    ngOnInit() {
    }
}
CashForLifeComponent.ɵfac = function CashForLifeComponent_Factory(t) { return new (t || CashForLifeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CashForLifeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CashForLifeComponent, selectors: [["app-cash-for-life"]], decls: 65, vars: 14, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5"], ["id", "5thNumber", 1, "generatedNumber"], ["id", "NumberCard6"], ["id", "6thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function CashForLifeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashForLifeComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Cash For Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cash For Life Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select five numbers from 1 through 60 and one cash ball number from 1 through 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17)(35, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br")(38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br")(41, "img", 20)(42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22)(50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashForLifeComponent_Template_button_click_50_listener() { ctx.GenerateCashForLife(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashForLifeComponent_Template_button_click_52_listener() { return ctx.saveCashForLifeNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27)(61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.cashForLifeGeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.cashForLifeGeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.cashForLifeGeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.cashForLifeGeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.cashForLifeGeneratedNumber5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.cashForLifeGeneratedCashBall, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \"", ctx.numberGenService.Phrase, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate7"](" ", ctx.cashForLifeSavedNumbers, " ", ctx.numberGenService.cashForLifeGeneratedNumber1, "", ctx.numberGenService.cashForLifeGeneratedNumber2, " ", ctx.numberGenService.cashForLifeGeneratedNumber3, ",", ctx.numberGenService.cashForLifeGeneratedNumber4, ",", ctx.numberGenService.cashForLifeGeneratedNumber5, " ", ctx.numberGenService.cashForLifeGeneratedCashBall, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard6[_ngcontent-%COMP%] {\n  background-color: #c8ffd1;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2gtZm9yLWxpZmUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9nYW1lcy9zdGF0ZS9GbG9yaWRhL2Nhc2gtZm9yLWxpZmUvY2FzaC1mb3ItbGlmZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEYiLCJmaWxlIjoiY2FzaC1mb3ItbGlmZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG5cbn1cblxuI0NhcmRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbn1cblxuI2dlbmllRGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG5cblxuI051bWJlckNhcmQxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG5cbn1cblxuI051bWJlckNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuXG4jTnVtYmVyQ2FyZDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyNTUsIDIwOSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2MDAlO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbiNTYXZlZE51bWJlcnN7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuIiwiI3RoZUJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbn1cblxuI0NhcmRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2dlbmllRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNOdW1iZXJDYXJkMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZmZkMTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2MDAlO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbiNTYXZlZE51bWJlcnMge1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn0iXX0= */"] });


/***/ }),

/***/ 6796:
/*!*********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lotto-gen/fl-lotto-game-theory/fl-lotto-game-theory.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLLottoGameTheoryComponent": () => (/* binding */ FLLottoGameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FLLottoGameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
FLLottoGameTheoryComponent.ɵfac = function FLLottoGameTheoryComponent_Factory(t) { return new (t || FLLottoGameTheoryComponent)(); };
FLLottoGameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FLLottoGameTheoryComponent, selectors: [["app-fl-lotto-game-theory"]], decls: 2, vars: 0, template: function FLLottoGameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fl-lotto-game-theory works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbC1sb3R0by1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 3775:
/*!****************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lotto-gen/fl-lotto-gen.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlLottoGenComponent": () => (/* binding */ FlLottoGenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class FlLottoGenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.FL_LottoSavedNumbers = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GenerateFL_Lotto() {
        console.log(this.numberGenService.FL_LottoRandomGenMaster());
    }
    saveFL_Lotto() {
        this.FL_LottoSavedNumbers.push(this.numberGenService.FL_Lottonum1, this.numberGenService.FL_Lottonum2, this.numberGenService.FL_Lottonum3, this.numberGenService.FL_Lottonum4, this.numberGenService.FL_Lottonum5, this.numberGenService.FL_Lottonum6);
        console.log(this.FL_LottoSavedNumbers);
    }
    ngOnInit() {
    }
}
FlLottoGenComponent.ɵfac = function FlLottoGenComponent_Factory(t) { return new (t || FlLottoGenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FlLottoGenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FlLottoGenComponent, selectors: [["app-fl-lotto-gen"]], decls: 65, vars: 14, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5"], ["id", "5thNumber", 1, "generatedNumber"], ["id", "NumberCard6"], ["id", "6thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function FlLottoGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLottoGenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Lotto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Florida Lotto Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select five numbers from 1 through 53. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17)(35, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br")(38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br")(41, "img", 20)(42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22)(50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLottoGenComponent_Template_button_click_50_listener() { ctx.GenerateFL_Lotto(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLottoGenComponent_Template_button_click_52_listener() { return ctx.saveFL_Lotto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27)(61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.FL_LottoGeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.FL_LottoGeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.FL_LottoGeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.FL_LottoGeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.FL_LottoGeneratedNumber5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.FL_LottoGeneratedNumber6, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \"", ctx.numberGenService.Phrase, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate7"](" ", ctx.FL_LottoSavedNumbers, " ", ctx.numberGenService.FL_LottoGeneratedNumber1, "", ctx.numberGenService.FL_LottoGeneratedNumber2, " ", ctx.numberGenService.FL_LottoGeneratedNumber3, ",", ctx.numberGenService.FL_LottoGeneratedNumber4, ",", ctx.numberGenService.FL_LottoGeneratedNumber5, " ", ctx.numberGenService.FL_LottoGeneratedNumber6, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard6[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsLWxvdHRvLWdlbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1F1YW50dW0lMjBBcHBsaWNhdGlvbnMvTG90dGVyeSUyMEdlbmllJTIwV2ViQXBwL2dlbmllLTUvTG90dGVyeS1HZW5pZS9zcmMvYXBwL2dhbWVzL3N0YXRlL0Zsb3JpZGEvZmwtbG90dG8tZ2VuL2ZsLWxvdHRvLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEYiLCJmaWxlIjoiZmwtbG90dG8tZ2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RoZUJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcblxufVxuXG4jQ2FyZENvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblxufVxuXG4jZ2VuaWVEaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cblxuXG4jTnVtYmVyQ2FyZDF7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcblxufVxuXG4jTnVtYmVyQ2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cbiNOdW1iZXJDYXJkNiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwMCU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuI1NhdmVkTnVtYmVyc3tcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4iLCIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4jQ2FyZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZ2VuaWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI051bWJlckNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwMCU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuI1NhdmVkTnVtYmVycyB7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });


/***/ }),

/***/ 3204:
/*!*******************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lotto-gen/fl-lotto-odds/fl-lotto-odds.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLLottoOddsComponent": () => (/* binding */ FLLottoOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FLLottoOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FLLottoOddsComponent.ɵfac = function FLLottoOddsComponent_Factory(t) { return new (t || FLLottoOddsComponent)(); };
FLLottoOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FLLottoOddsComponent, selectors: [["app-fl-lotto-odds"]], decls: 2, vars: 0, template: function FLLottoOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fl-lotto-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbC1sb3R0by1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 4513:
/*!***************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lotto-gen/fl-lotto-rules-and-odds/fl-lotto-rules-and-odds.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLLottoRulesAndOddsComponent": () => (/* binding */ FLLottoRulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FLLottoRulesAndOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FLLottoRulesAndOddsComponent.ɵfac = function FLLottoRulesAndOddsComponent_Factory(t) { return new (t || FLLottoRulesAndOddsComponent)(); };
FLLottoRulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FLLottoRulesAndOddsComponent, selectors: [["app-fl-lotto-rules-and-odds"]], decls: 2, vars: 0, template: function FLLottoRulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fl-lotto-rules-and-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbC1sb3R0by1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 6183:
/*!*********************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lotto-gen/fl-lotto-rules/fl-lotto-rules.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLLottoRulesComponent": () => (/* binding */ FLLottoRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FLLottoRulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
FLLottoRulesComponent.ɵfac = function FLLottoRulesComponent_Factory(t) { return new (t || FLLottoRulesComponent)(); };
FLLottoRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FLLottoRulesComponent, selectors: [["app-fl-lotto-rules"]], decls: 2, vars: 0, template: function FLLottoRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fl-lotto-rules works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbC1sb3R0by1ydWxlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 2661:
/*!****************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lucky-money-gen/fl-lucky-money-gen.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlLuckyMoneyGenComponent": () => (/* binding */ FlLuckyMoneyGenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class FlLuckyMoneyGenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.luckyMoneySavedNumbers = [];
    }
    GenerateLuckyMoney() {
        console.log(this.numberGenService.luckyMoneyRandomGenMaster());
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    luckyMoneyInfo() {
        this.router.navigate(['/luckyMoneyInfo']);
    }
    ngOnInit() { }
}
FlLuckyMoneyGenComponent.ɵfac = function FlLuckyMoneyGenComponent_Factory(t) { return new (t || FlLuckyMoneyGenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FlLuckyMoneyGenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FlLuckyMoneyGenComponent, selectors: [["app-fl-lucky-money-gen"]], decls: 64, vars: 11, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5"], ["id", "luckyBall", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function FlLuckyMoneyGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLuckyMoneyGenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Lucky Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lucky Money Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select four numbers ranging 0 through 47 + one lucky ball ranging from 0 through 17. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLuckyMoneyGenComponent_Template_button_click_18_listener() { return ctx.luckyMoneyInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I wish to know more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "div", 7)(22, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13)(31, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br")(37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br")(40, "img", 18)(41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 20)(49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLuckyMoneyGenComponent_Template_button_click_49_listener() { ctx.GenerateLuckyMoney(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FlLuckyMoneyGenComponent_Template_button_click_51_listener() { return ctx.GenerateLuckyMoney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 25)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.luckyMoneyGeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.luckyMoneyGeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.luckyMoneyGeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.luckyMoneyGeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.luckyMoneyGeneratedLuckyBall, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \"", ctx.numberGenService.Phrase, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"](" ", ctx.luckyMoneySavedNumbers, " - ", ctx.numberGenService.Pick4GeneratedNumber1, "", ctx.numberGenService.Pick4GeneratedNumber2, " ", ctx.numberGenService.Pick4GeneratedNumber3, " ", ctx.numberGenService.Pick4GeneratedNumber4, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #f6c8ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsLWx1Y2t5LW1vbmV5LWdlbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1F1YW50dW0lMjBBcHBsaWNhdGlvbnMvTG90dGVyeSUyMEdlbmllJTIwV2ViQXBwL2dlbmllLTUvTG90dGVyeS1HZW5pZS9zcmMvYXBwL2dhbWVzL3N0YXRlL0Zsb3JpZGEvZmwtbHVja3ktbW9uZXktZ2VuL2ZsLWx1Y2t5LW1vbmV5LWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hGIiwiZmlsZSI6ImZsLWx1Y2t5LW1vbmV5LWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG5cbn1cblxuI0NhcmRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbn1cblxuI2dlbmllRGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG5cblxuI051bWJlckNhcmQxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG5cbn1cblxuI051bWJlckNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjAwLCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJze1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLy8gI2x1Y2t5QmFsbHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjA1LCAyNDUpXG4vLyB9XG4iLCIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4jQ2FyZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZ2VuaWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI051bWJlckNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmM4ZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJzIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ 4056:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lucky-money-gen/lucky-money-game-theory/lucky-money-game-theory.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckyMoneyGameTheoryComponent": () => (/* binding */ LuckyMoneyGameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LuckyMoneyGameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
LuckyMoneyGameTheoryComponent.ɵfac = function LuckyMoneyGameTheoryComponent_Factory(t) { return new (t || LuckyMoneyGameTheoryComponent)(); };
LuckyMoneyGameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuckyMoneyGameTheoryComponent, selectors: [["app-lucky-money-game-theory"]], decls: 2, vars: 0, template: function LuckyMoneyGameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " lucky-money-game-theory works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsdWNreS1tb25leS1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 522:
/*!*******************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lucky-money-gen/lucky-money-odds/lucky-money-odds.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckyMoneyOddsComponent": () => (/* binding */ LuckyMoneyOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LuckyMoneyOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LuckyMoneyOddsComponent.ɵfac = function LuckyMoneyOddsComponent_Factory(t) { return new (t || LuckyMoneyOddsComponent)(); };
LuckyMoneyOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuckyMoneyOddsComponent, selectors: [["app-lucky-money-odds"]], decls: 31, vars: 0, consts: [["id", "Odds", 1, ""]], template: function LuckyMoneyOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Odds and Probability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " $500.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 1:1000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " What to know about odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " What is important to understand about the odds of winning a lottery game like this is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " odds. It means that if you played the game 100 times, you should expect, on average to win once. This ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " can also be expressed as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1 out of 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsdWNreS1tb25leS1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7784:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lucky-money-gen/lucky-money-rules-and-odds/lucky-money-rules-and-odds.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckyMoneyRulesAndOddsComponent": () => (/* binding */ LuckyMoneyRulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _flpick5_gen_pick5_rules_pick5_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flpick5-gen/pick5-rules/pick5-rules.component */ 3900);
/* harmony import */ var _flpick5_gen_pick5_odds_pick5_odds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flpick5-gen/pick5-odds/pick5-odds.component */ 2464);
/* harmony import */ var _flpick5_gen_pick5_game_theory_pick5_game_theory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../flpick5-gen/pick5-game-theory/pick5-game-theory.component */ 4386);






function LuckyMoneyRulesAndOddsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick5-rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.hidden);
} }
function LuckyMoneyRulesAndOddsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick5-odds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r1.hidden);
} }
function LuckyMoneyRulesAndOddsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick5-game-theory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r2.hidden);
} }
class LuckyMoneyRulesAndOddsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/luckyMoney']);
    }
    ngOnInit() { }
}
LuckyMoneyRulesAndOddsComponent.ɵfac = function LuckyMoneyRulesAndOddsComponent_Factory(t) { return new (t || LuckyMoneyRulesAndOddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LuckyMoneyRulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LuckyMoneyRulesAndOddsComponent, selectors: [["app-lucky-money-rules-and-odds"]], decls: 25, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["class", "pagination justify-content-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "pagination", "justify-content-center", 3, "hidden"]], template: function LuckyMoneyRulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LuckyMoneyRulesAndOddsComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Florida Lucky Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Florida Lucky Money Rules & Odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LuckyMoneyRulesAndOddsComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LuckyMoneyRulesAndOddsComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LuckyMoneyRulesAndOddsComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "img", 4)(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\"What arcane knowledge dost thou seek, mortal?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LuckyMoneyRulesAndOddsComponent_Template_button_click_19_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Tell me about the rules for this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LuckyMoneyRulesAndOddsComponent_Template_button_click_21_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Tell me about the odds and probability");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LuckyMoneyRulesAndOddsComponent_Template_button_click_23_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tell me about the game theory involved with this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show1)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", ctx.elseBlock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _flpick5_gen_pick5_rules_pick5_rules_component__WEBPACK_IMPORTED_MODULE_0__.Pick5RulesComponent, _flpick5_gen_pick5_odds_pick5_odds_component__WEBPACK_IMPORTED_MODULE_1__.Pick5OddsComponent, _flpick5_gen_pick5_game_theory_pick5_game_theory_component__WEBPACK_IMPORTED_MODULE_2__.Pick5GameTheoryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsdWNreS1tb25leS1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 9436:
/*!*********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/fl-lucky-money-gen/lucky-money-rules/lucky-money-rules.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckyMoneyRulesComponent": () => (/* binding */ LuckyMoneyRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LuckyMoneyRulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
LuckyMoneyRulesComponent.ɵfac = function LuckyMoneyRulesComponent_Factory(t) { return new (t || LuckyMoneyRulesComponent)(); };
LuckyMoneyRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuckyMoneyRulesComponent, selectors: [["app-lucky-money-rules"]], decls: 84, vars: 0, consts: [["id", "Rules-Container", 1, "pagination", "justify-content-center"], ["id", "Rules", 1, ""]], template: function LuckyMoneyRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rules & How to win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Select the amount you want to play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(Pick three numbers between 0-9 from each column for a total of three digits)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": 50 cents or $1 (all Straight/Box and 1-OFF plays cost $1). Combo plays cost $1.50 to $6.00) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " There are two drawings per day seven days per week, at approximately ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1:30 p.m. and 9:45 p.m. ET.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tickets for each drawing can be purchased up to 13 minutes prior to the applicable drawing \u2013 1:17 p.m. ET for the midday drawings and 9:32 p.m. ET for the evening drawings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Select the draw time. Select MID for the midday drawing (1:30 p.m. ET), EVE for the evening drawing (9:45p.m. ET) draw, or BOTH for both the midday and evening drawings. If no draw time is marked, the terminal will automatically print a ticket for the next available draw. If BOTH is selected, two separate tickets will print \u2013 one for the midday drawing and one for the evening drawing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "You can win a top prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "$50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "with a $1 Straight play, or increase your chances of winning with a Box, Straight/Box, Front/Back Number or 1-OFF play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p")(30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reminder: Prizes must be claimed within 180 days of the draw date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " All PICK 3 prizes may be claimed at any authorized Florida Lottery retailer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Different ways to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Florida lottery offers different ways to win and maximize chances of winning prizes. Below the terms are explained:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p")(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ( and 50 cent play pays of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$250.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ") with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1 : 1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2. 3-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$160.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$80.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1:333.33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Select a 3-digit number with two like digits and get 3 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p")(66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3. 6-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "$80.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$40.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1:666.67");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select a 3-digit number with all different digits and get 6 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p")(80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 3. 1-OFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 1-OFF allows you to still win a prize if the numbers that are drawn are either 1 number higher or lower than your selected numbers (example, you play the numbers 2-2-2, and the numbers 1-3-3 are drawn) (1-OFF is optional and costs $1.00). This amounts to an extra 26 ways to win, and changes the probability of winning a prize. In order to play it you must select the 1-OFF box on your lottery slip. You can be 1-OFF on either 1 or both, or all three numbers. Ask the Djinni about the games probability for in depth look at how the odds and probability off the 1-Off game work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsdWNreS1tb25leS1ydWxlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 1688:
/*!***********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flfantasy5-gen/fantasy5-game-theory/fantasy5-game-theory.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fantasy5GameTheoryComponent": () => (/* binding */ Fantasy5GameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Fantasy5GameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
Fantasy5GameTheoryComponent.ɵfac = function Fantasy5GameTheoryComponent_Factory(t) { return new (t || Fantasy5GameTheoryComponent)(); };
Fantasy5GameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Fantasy5GameTheoryComponent, selectors: [["app-fantasy5-game-theory"]], decls: 2, vars: 0, template: function Fantasy5GameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fantasy5-game-theory works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW50YXN5NS1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 9823:
/*!*********************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flfantasy5-gen/fantasy5-odds/fantasy5-odds.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fantasy5OddsComponent": () => (/* binding */ Fantasy5OddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Fantasy5OddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
Fantasy5OddsComponent.ɵfac = function Fantasy5OddsComponent_Factory(t) { return new (t || Fantasy5OddsComponent)(); };
Fantasy5OddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Fantasy5OddsComponent, selectors: [["app-fantasy5-odds"]], decls: 2, vars: 0, template: function Fantasy5OddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fantasy5-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW50YXN5NS1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 9429:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flfantasy5-gen/fantasy5-rules-and-odds/fantasy5-rules-and-odds.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fantasy5RulesAndOddsComponent": () => (/* binding */ Fantasy5RulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Fantasy5RulesAndOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
Fantasy5RulesAndOddsComponent.ɵfac = function Fantasy5RulesAndOddsComponent_Factory(t) { return new (t || Fantasy5RulesAndOddsComponent)(); };
Fantasy5RulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Fantasy5RulesAndOddsComponent, selectors: [["app-fantasy5-rules-and-odds"]], decls: 2, vars: 0, template: function Fantasy5RulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fantasy5-rules-and-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW50YXN5NS1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4736:
/*!***********************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flfantasy5-gen/fantasy5-rules/fantasy5-rules.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fantasy5RulesComponent": () => (/* binding */ Fantasy5RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Fantasy5RulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
Fantasy5RulesComponent.ɵfac = function Fantasy5RulesComponent_Factory(t) { return new (t || Fantasy5RulesComponent)(); };
Fantasy5RulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Fantasy5RulesComponent, selectors: [["app-fantasy5-rules"]], decls: 2, vars: 0, template: function Fantasy5RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fantasy5-rules works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYW50YXN5NS1ydWxlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 6067:
/*!********************************************************************************!*\
  !*** ./src/app/games/state/Florida/flfantasy5-gen/flfantasy5-gen.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLFantasy5GenComponent": () => (/* binding */ FLFantasy5GenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class FLFantasy5GenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.fantasy5SavedNumbers = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GenerateFantasy5() {
        console.log(this.numberGenService.fantasy5randomGenMaster());
    }
    saveFantasy5() {
        this.fantasy5SavedNumbers.push(this.numberGenService.fantasy5num1, this.numberGenService.fantasy5num2, this.numberGenService.fantasy5num3, this.numberGenService.fantasy5num4, this.numberGenService.fantasy5num5);
        console.log(this.fantasy5SavedNumbers);
    }
    ngOnInit() {
    }
}
FLFantasy5GenComponent.ɵfac = function FLFantasy5GenComponent_Factory(t) { return new (t || FLFantasy5GenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FLFantasy5GenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FLFantasy5GenComponent, selectors: [["app-flfantasy5-gen"]], decls: 62, vars: 12, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5"], ["id", "5thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function FLFantasy5GenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLFantasy5GenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Fantasy 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Fantasy 5 Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select five numbers from 1 through 36 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br")(35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br")(38, "img", 18)(39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19)(41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 20)(47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLFantasy5GenComponent_Template_button_click_47_listener() { ctx.GenerateFantasy5(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLFantasy5GenComponent_Template_button_click_49_listener() { return ctx.saveFantasy5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25)(58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.fantasy5GeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.fantasy5GeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.fantasy5GeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.fantasy5GeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.fantasy5GeneratedNumber5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \"", ctx.numberGenService.Phrase, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate6"](" ", ctx.fantasy5SavedNumbers, " ", ctx.numberGenService.fantasy5GeneratedNumber1, "", ctx.numberGenService.fantasy5GeneratedNumber2, " ", ctx.numberGenService.fantasy5GeneratedNumber3, ",", ctx.numberGenService.fantasy5GeneratedNumber4, ",", ctx.numberGenService.fantasy5GeneratedNumber5, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZmFudGFzeTUtZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9mbGZhbnRhc3k1LWdlbi9mbGZhbnRhc3k1LWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0pGIiwiZmlsZSI6ImZsZmFudGFzeTUtZ2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RoZUJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcblxufVxuXG4jQ2FyZENvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblxufVxuXG4jZ2VuaWVEaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cblxuXG4jTnVtYmVyQ2FyZDF7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcblxufVxuXG4jTnVtYmVyQ2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwMCU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuI1NhdmVkTnVtYmVyc3tcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4iLCIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4jQ2FyZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZ2VuaWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI051bWJlckNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJzIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ 4779:
/*!**************************************************************************!*\
  !*** ./src/app/games/state/Florida/flgame-pick/flgame-pick.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLGamePickComponent": () => (/* binding */ FLGamePickComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class FLGamePickComponent {
    constructor(theRouter) {
        this.theRouter = theRouter;
    }
    ngOnInit() {
    }
    back() {
        this.theRouter.navigate(['/LotteryNumberGenMainPage']);
    }
}
FLGamePickComponent.ɵfac = function FLGamePickComponent_Factory(t) { return new (t || FLGamePickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FLGamePickComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FLGamePickComponent, selectors: [["app-flgame-pick"]], decls: 23, vars: 0, consts: [[1, "btn", "btn-outline-primary", 3, "click"], ["layout", "row", "layout-align", "center center", 2, "min-height", "500px"], ["href", "/FLPick2"], ["src", "./assets/public/images/p2-game-pg-banner.jpg"], ["href", "/FLPick3"], ["src", "./assets/public/images/p3-game-pg-banner.jpg"], ["href", "/FLPick4"], ["src", "./assets/public/images/p4-game-pg-banner.jpg"], ["href", "/FLPick5"], ["src", "./assets/public/images/p5-game-pg-banner.jpg"], ["href", "/luckyMoney"], ["src", "./assets/public/images/luckyMoney-game-pg-banner_en.jpg"], ["href", "/fantasy5"], ["src", "./assets/public/images/fan5-game-pgbanner.jpg"], ["href", "/cashForLife"], ["src", "./assets/public/images/c4l-game-pg-banner.jpg"], ["href", "/floridaLotto"], ["src", "./assets/public/images/lotto-game-pg-banner.jpg"], ["href", "/megaMillions"], ["src", "./assets/public/images/megaMill-game-pg-banner.jpg"], ["href", "/powerBall"], ["src", "./assets/public/images/pb-game-pg-banner.jpg"]], template: function FLGamePickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FLGamePickComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGdhbWUtcGljay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5314:
/*!**************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick2-gen/flpick2-gen.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLPick2GenComponent": () => (/* binding */ FLPick2GenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class FLPick2GenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        // The random numbers that get generated and defining empty lists to store multiple values in.
        // tslint:disable-next-line: member-ordering
        this.pick2SavedNumbers = [];
    }
    // NumberGenService: NumberGenService
    ngOnInit() { }
    generatePick2() {
        console.log(this.numberGenService.pick2randomGenMaster());
    }
    saveNumber() {
        this.pick2SavedNumbers.push(this.numberGenService.pick2num1, this.numberGenService.pick2num2);
        console.log(this.pick2SavedNumbers);
        // this.pick2NumberSet = [this.pick2num1, this.pick2num2]
    }
    // addNumbers() {
    //   // this.NumberSaver.numbersPlayed()
    // }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    FLPick2RulesOdds() {
        this.router.navigate(['/FLPick2RulesOdds']);
    }
}
FLPick2GenComponent.ɵfac = function FLPick2GenComponent_Factory(t) { return new (t || FLPick2GenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FLPick2GenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FLPick2GenComponent, selectors: [["app-flpick2-gen"]], decls: 58, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "rules", 1, ""], [1, "btn", "btn-outline-info", 3, "click"], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function FLPick2GenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLPick2GenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Pick 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pick-2 Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select two numbers from 0 through 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLPick2GenComponent_Template_button_click_18_listener() { return ctx.FLPick2RulesOdds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I wish to know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br")(28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br")(31, "img", 13)(32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14)(34, "p")(35, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15)(41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLPick2GenComponent_Template_button_click_41_listener() { ctx.numberGenService.pick2randomGenMaster(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLPick2GenComponent_Template_button_click_43_listener() { return ctx.saveNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FLPick2GenComponent_Template_button_click_45_listener() { ctx.numberGenService.pick2randomGenMaster(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 20)(52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick2GeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick2GeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.numberGenService.Phrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("[ ", ctx.numberGenService.Pick2GeneratedNumber1, ", ", ctx.numberGenService.Pick2GeneratedNumber2, " ] ----");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.pick2SavedNumbers, "");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZscGljazItZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9mbHBpY2syLWdlbi9mbHBpY2syLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNORiIsImZpbGUiOiJmbHBpY2syLWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG5cbn1cblxuI0NhcmRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbn1cblxuI2dlbmllRGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG5cblxuI051bWJlckNhcmQxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG5cbn1cblxuI051bWJlckNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJze1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuZGl2IHtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG59XG4iLCIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4jQ2FyZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZ2VuaWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI051bWJlckNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJzIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmRpdiB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufSJdfQ== */"] });


/***/ }),

/***/ 3779:
/*!************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick2-gen/flpick2-rules-and-odds/flpick2-rules-and-odds.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flpick2RulesAndOddsComponent": () => (/* binding */ Flpick2RulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pick2_rules_pick2_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pick2-rules/pick2-rules.component */ 4131);
/* harmony import */ var _pick2_odds_pick2_odds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pick2-odds/pick2-odds.component */ 9577);
/* harmony import */ var _pick2_game_theory_pick2_game_theory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pick2-game-theory/pick2-game-theory.component */ 6874);






function Flpick2RulesAndOddsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick2-rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.hidden);
} }
function Flpick2RulesAndOddsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick2-odds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r1.hidden);
} }
function Flpick2RulesAndOddsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick2-game-theory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r2.hidden);
} }
class Flpick2RulesAndOddsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/FLPick2']);
    }
    ngOnInit() {
    }
}
Flpick2RulesAndOddsComponent.ɵfac = function Flpick2RulesAndOddsComponent_Factory(t) { return new (t || Flpick2RulesAndOddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
Flpick2RulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Flpick2RulesAndOddsComponent, selectors: [["app-flpick2-rules-and-odds"]], decls: 25, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["class", "pagination justify-content-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "pagination", "justify-content-center", 3, "hidden"]], template: function Flpick2RulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Flpick2RulesAndOddsComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Florida Pick 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Pick 2 rules & odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, Flpick2RulesAndOddsComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, Flpick2RulesAndOddsComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, Flpick2RulesAndOddsComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "img", 4)(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\"What arcane knowledge dost thou seek, mortal?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Flpick2RulesAndOddsComponent_Template_button_click_19_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Tell me about the rules of this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Flpick2RulesAndOddsComponent_Template_button_click_21_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Tell me about the odds and probability for this game");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Flpick2RulesAndOddsComponent_Template_button_click_23_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tell me about game theory for this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show1)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", ctx.elseBlock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pick2_rules_pick2_rules_component__WEBPACK_IMPORTED_MODULE_0__.Pick2RulesComponent, _pick2_odds_pick2_odds_component__WEBPACK_IMPORTED_MODULE_1__.Pick2OddsComponent, _pick2_game_theory_pick2_game_theory_component__WEBPACK_IMPORTED_MODULE_2__.Pick2GameTheoryComponent], styles: ["div[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZscGljazItcnVsZXMtYW5kLW9kZHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9nYW1lcy9zdGF0ZS9GbG9yaWRhL2ZscGljazItZ2VuL2ZscGljazItcnVsZXMtYW5kLW9kZHMvZmxwaWNrMi1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoiZmxwaWNrMi1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuIiwiZGl2IHtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG59Il19 */"] });


/***/ }),

/***/ 6874:
/*!**************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick2-gen/pick2-game-theory/pick2-game-theory.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick2GameTheoryComponent": () => (/* binding */ Pick2GameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick2GameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick2GameTheoryComponent.ɵfac = function Pick2GameTheoryComponent_Factory(t) { return new (t || Pick2GameTheoryComponent)(); };
Pick2GameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick2GameTheoryComponent, selectors: [["app-pick2-game-theory"]], decls: 8, vars: 0, consts: [[1, "rules"]], template: function Pick2GameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gametheory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Game theory is the study of mathematical models of strategic interaction between rational decision-makers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrMi1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 9577:
/*!************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick2-gen/pick2-odds/pick2-odds.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick2OddsComponent": () => (/* binding */ Pick2OddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick2OddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick2OddsComponent.ɵfac = function Pick2OddsComponent_Factory(t) { return new (t || Pick2OddsComponent)(); };
Pick2OddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick2OddsComponent, selectors: [["app-pick2-odds"]], decls: 49, vars: 0, consts: [["id", "", 1, "rules"]], template: function Pick2OddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Odds and Probability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Strait: Match numbers in exact order. 1$ strait play pays off $50.00 with odds of 1 : 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p")(11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2. Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Box play odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p")(17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 3. 1-OFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " You can be 1-OFF on either 1 or both numbers for a prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "$3.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " with 8 possible winning combinations or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1:25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " odds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p")(27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4. Front number OR back number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " You have a 1:10 chance of drawing the 1st number or the 2nd for a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "$5.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " prize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " What to know about odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " What is important to understand about the odds of winning a lottery game like this is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " odds. It means that if you played the game 100 times, you should expect, on average to win once. This ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " can also be expressed as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1 out of 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n}\n\n.rules[_ngcontent-%COMP%] {\n  background-color: #a6caa8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2syLW9kZHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9nYW1lcy9zdGF0ZS9GbG9yaWRhL2ZscGljazItZ2VuL3BpY2syLW9kZHMvcGljazItb2Rkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InBpY2syLW9kZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuLnJ1bGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NiwgMjAyLCAxNjgpO1xufVxuIiwiZGl2IHtcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbi5ydWxlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmNhYTg7XG59Il19 */"] });


/***/ }),

/***/ 4131:
/*!**************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick2-gen/pick2-rules/pick2-rules.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick2RulesComponent": () => (/* binding */ Pick2RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick2RulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick2RulesComponent.ɵfac = function Pick2RulesComponent_Factory(t) { return new (t || Pick2RulesComponent)(); };
Pick2RulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick2RulesComponent, selectors: [["app-pick2-rules"]], decls: 74, vars: 0, consts: [["id", "Rules-Container", 1, "pagination", "justify-content-center"], ["id", "", 1, "rules"]], template: function Pick2RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rules & How to win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Select the amount you want to play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(Pick two numbers between 0-9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": 50 cents or $1 (all Straight/Box and 1-OFF plays cost $1). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " There are two drawings per day seven days per week, at approximately ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1:30 p.m. and 9:45 p.m. ET.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tickets for each drawing can be purchased up to 13 minutes prior to the applicable drawing \u2013 1:17 p.m. ET for the midday drawings and 9:32 p.m. ET for the evening drawings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Select the draw time. Select MID for the midday drawing (1:30 p.m. ET), EVE for the evening drawing (9:45p.m. ET) draw, or BOTH for both the midday and evening drawings. If no draw time is marked, the terminal will automatically print a ticket for the next available draw. If BOTH is selected, two separate tickets will print \u2013 one for the midday drawing and one for the evening drawing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "You can win a top prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "$50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "with a $1 Straight play, or increase your chances of winning with a Box, Straight/Box, Front/Back Number or 1-OFF play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p")(30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reminder: Prizes must be claimed within 180 days of the draw date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " All PICK 2 prizes may be claimed at any authorized Florida Lottery retailer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Different ways to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Florida lottery offers different ways to win and maximize chances of winning prizes. Below the terms are explained:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p")(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$50.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ( and 50 cent play pays of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$25.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ") with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1 : 100 odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2. Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Box play means matching numbers in any order for a prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$25.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$12.50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p")(64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 3. 1-OFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 1-OFF allows you to still win a prize if the numbers that are drawn are either 1 number higher or lower than your selected numbers (example, you play the numbers 2-2, and the numbers 1-3 are drawn) (optional). In order to play it you must select the 1-OFF box on your lottery slip. You can be 1-OFF on either 1 or both numbers for a prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$3.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " with 8 possible winning combinations or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "1:25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " odds. 50 cent plays are not eligible for 1-OFF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  padding: 1%;\n  margin: 1%;\n}\n\n.rules[_ngcontent-%COMP%] {\n  background-color: #d6c8e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2syLXJ1bGVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9mbHBpY2syLWdlbi9waWNrMi1ydWxlcy9waWNrMi1ydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FER0E7RUFDRSx5QkFBQTtBQ0FGIiwiZmlsZSI6InBpY2syLXJ1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cblxuLnJ1bGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjAwLCAyMzApO1xufVxuIiwiZGl2IHtcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbi5ydWxlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmM4ZTY7XG59Il19 */"] });


/***/ }),

/***/ 3033:
/*!**************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick3-gen/flpick3-gen.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flpick3GenComponent": () => (/* binding */ Flpick3GenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class Flpick3GenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        // tslint:disable-next-line: member-ordering
        this.pick3SavedNumbers = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    FLPick3RulesOdds() {
        this.router.navigate(['/FLPick3RulesOdds']);
    }
    saveNumberPick3() {
        this.pick3SavedNumbers.push(this.numberGenService.pick3num1, this.numberGenService.pick3num2, this.numberGenService.pick3num3);
        console.log(this.pick3SavedNumbers);
    }
    GeneratePick3() {
        console.log(this.numberGenService.pick3randomGenMaster());
    }
    ngOnInit() {
    }
}
Flpick3GenComponent.ɵfac = function Flpick3GenComponent_Factory(t) { return new (t || Flpick3GenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
Flpick3GenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Flpick3GenComponent, selectors: [["app-flpick3-gen"]], decls: 59, vars: 8, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "rules", 1, ""], [1, "btn", "btn-outline-info", 3, "click"], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function Flpick3GenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick3GenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Pick 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pick-3 Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select three numbers from 0 through 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick3GenComponent_Template_button_click_18_listener() { return ctx.FLPick3RulesOdds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I wish to know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12)(28, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br")(31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br")(34, "img", 15)(35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "p")(38, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 17)(44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick3GenComponent_Template_button_click_44_listener() { ctx.GeneratePick3(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick3GenComponent_Template_button_click_46_listener() { return ctx.saveNumberPick3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " I will play this number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22)(55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick3GeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick3GeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick3GeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.numberGenService.Phrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", ctx.pick3SavedNumbers, " - ", ctx.numberGenService.Pick3GeneratedNumber1, "", ctx.numberGenService.Pick3GeneratedNumber2, " ", ctx.numberGenService.Pick3GeneratedNumber3, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZscGljazMtZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9mbHBpY2szLWdlbi9mbHBpY2szLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FESUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTEY7O0FET0E7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7QUNKRjs7QURPQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSkYiLCJmaWxlIjoiZmxwaWNrMy1nZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4jQ2FyZENvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblxufVxuXG4jZ2VuaWVEaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cblxuXG4jTnVtYmVyQ2FyZDF7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcblxufVxuXG4jTnVtYmVyQ2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2MDAlO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbiNTYXZlZE51bWJlcnN7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuIiwiI3RoZUJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbn1cblxuI0NhcmRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2dlbmllRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNOdW1iZXJDYXJkMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2MDAlO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbiNTYXZlZE51bWJlcnMge1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn0iXX0= */"] });


/***/ }),

/***/ 2991:
/*!**************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick3-gen/pick3-game-theory/pick3-game-theory.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick3GameTheoryComponent": () => (/* binding */ Pick3GameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick3GameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick3GameTheoryComponent.ɵfac = function Pick3GameTheoryComponent_Factory(t) { return new (t || Pick3GameTheoryComponent)(); };
Pick3GameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick3GameTheoryComponent, selectors: [["app-pick3-game-theory"]], decls: 8, vars: 0, consts: [["id", "Odds", 1, ""]], template: function Pick3GameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gametheory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Game theory is the study of mathematical models of strategic interaction between rational decision-makers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrMy1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 3804:
/*!************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick3-gen/pick3-odds/pick3-odds.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick3OddsComponent": () => (/* binding */ Pick3OddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick3OddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick3OddsComponent.ɵfac = function Pick3OddsComponent_Factory(t) { return new (t || Pick3OddsComponent)(); };
Pick3OddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick3OddsComponent, selectors: [["app-pick3-odds"]], decls: 31, vars: 0, consts: [["id", "Odds", 1, ""]], template: function Pick3OddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Odds and Probability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " $500.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 1:1000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " What to know about odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " What is important to understand about the odds of winning a lottery game like this is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " odds. It means that if you played the game 100 times, you should expect, on average to win once. This ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " can also be expressed as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1 out of 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrMy1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 8730:
/*!********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick3-gen/pick3-rules-and-odds/pick3-rules-and-odds.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick3RulesAndOddsComponent": () => (/* binding */ Pick3RulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pick3_rules_pick3_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pick3-rules/pick3-rules.component */ 2346);
/* harmony import */ var _pick3_odds_pick3_odds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pick3-odds/pick3-odds.component */ 3804);
/* harmony import */ var _pick3_game_theory_pick3_game_theory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pick3-game-theory/pick3-game-theory.component */ 2991);






function Pick3RulesAndOddsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick3-rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.hidden);
} }
function Pick3RulesAndOddsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick3-odds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r1.hidden);
} }
function Pick3RulesAndOddsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick3-game-theory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r2.hidden);
} }
class Pick3RulesAndOddsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/FLPick2']);
    }
    ngOnInit() {
    }
}
Pick3RulesAndOddsComponent.ɵfac = function Pick3RulesAndOddsComponent_Factory(t) { return new (t || Pick3RulesAndOddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
Pick3RulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Pick3RulesAndOddsComponent, selectors: [["app-pick3-rules-and-odds"]], decls: 25, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["class", "pagination justify-content-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "pagination", "justify-content-center", 3, "hidden"]], template: function Pick3RulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick3RulesAndOddsComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Florida Pick 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Florida Pick 3 rules & odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, Pick3RulesAndOddsComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, Pick3RulesAndOddsComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, Pick3RulesAndOddsComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "img", 4)(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\"What arcane knowledge dost thou seek, mortal?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick3RulesAndOddsComponent_Template_button_click_19_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Tell me about the rules for this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick3RulesAndOddsComponent_Template_button_click_21_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Tell me about the odds and probability");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick3RulesAndOddsComponent_Template_button_click_23_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tell me about the game theory involved with this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show1)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", ctx.elseBlock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pick3_rules_pick3_rules_component__WEBPACK_IMPORTED_MODULE_0__.Pick3RulesComponent, _pick3_odds_pick3_odds_component__WEBPACK_IMPORTED_MODULE_1__.Pick3OddsComponent, _pick3_game_theory_pick3_game_theory_component__WEBPACK_IMPORTED_MODULE_2__.Pick3GameTheoryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrMy1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 2346:
/*!**************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick3-gen/pick3-rules/pick3-rules.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick3RulesComponent": () => (/* binding */ Pick3RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick3RulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick3RulesComponent.ɵfac = function Pick3RulesComponent_Factory(t) { return new (t || Pick3RulesComponent)(); };
Pick3RulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick3RulesComponent, selectors: [["app-pick3-rules"]], decls: 84, vars: 0, consts: [["id", "Rules-Container", 1, "pagination", "justify-content-center"], ["id", "Rules", 1, ""]], template: function Pick3RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rules & How to win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Select the amount you want to play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(Pick three numbers between 0-9 from each column for a total of three digits)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": 50 cents or $1 (all Straight/Box and 1-OFF plays cost $1). Combo plays cost $1.50 to $6.00) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " There are two drawings per day seven days per week, at approximately ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1:30 p.m. and 9:45 p.m. ET.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tickets for each drawing can be purchased up to 13 minutes prior to the applicable drawing \u2013 1:17 p.m. ET for the midday drawings and 9:32 p.m. ET for the evening drawings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Select the draw time. Select MID for the midday drawing (1:30 p.m. ET), EVE for the evening drawing (9:45p.m. ET) draw, or BOTH for both the midday and evening drawings. If no draw time is marked, the terminal will automatically print a ticket for the next available draw. If BOTH is selected, two separate tickets will print \u2013 one for the midday drawing and one for the evening drawing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "You can win a top prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "$50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "with a $1 Straight play, or increase your chances of winning with a Box, Straight/Box, Front/Back Number or 1-OFF play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p")(30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reminder: Prizes must be claimed within 180 days of the draw date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " All PICK 3 prizes may be claimed at any authorized Florida Lottery retailer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Different ways to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Florida lottery offers different ways to win and maximize chances of winning prizes. Below the terms are explained:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p")(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ( and 50 cent play pays of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$250.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ") with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1 : 1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2. 3-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$160.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$80.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1:333.33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Select a 3-digit number with two like digits and get 3 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p")(66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3. 6-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "$80.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$40.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1:666.67");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select a 3-digit number with all different digits and get 6 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p")(80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 3. 1-OFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 1-OFF allows you to still win a prize if the numbers that are drawn are either 1 number higher or lower than your selected numbers (example, you play the numbers 2-2-2, and the numbers 1-3-3 are drawn) (1-OFF is optional and costs $1.00). This amounts to an extra 26 ways to win, and changes the probability of winning a prize. In order to play it you must select the 1-OFF box on your lottery slip. You can be 1-OFF on either 1 or both, or all three numbers. Ask the Djinni about the games probability for in depth look at how the odds and probability off the 1-Off game work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrMy1ydWxlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 3363:
/*!**************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick4-gen/flpick4-gen.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flpick4GenComponent": () => (/* binding */ Flpick4GenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class Flpick4GenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.pick4SavedNumbers = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GeneratePick4() {
        console.log(this.numberGenService.pick4randomGenMaster());
    }
    savePick4Number() {
        this.pick4SavedNumbers.push(this.numberGenService.pick4num1, this.numberGenService.pick4num2, this.numberGenService.pick4num3, this.numberGenService.pick4num4);
        console.log(this.pick4SavedNumbers);
    }
    FLPick4RulesOdds() {
        this.router.navigate(['/FLPick4RulesOdds']);
    }
    ngOnInit() {
    }
}
Flpick4GenComponent.ɵfac = function Flpick4GenComponent_Factory(t) { return new (t || Flpick4GenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
Flpick4GenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Flpick4GenComponent, selectors: [["app-flpick4-gen"]], decls: 62, vars: 10, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], [1, "btn", "btn-outline-info", 3, "click"], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function Flpick4GenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick4GenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Pick 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pick-4 Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select four numbers from 0 through 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick4GenComponent_Template_button_click_18_listener() { return ctx.FLPick4RulesOdds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I wish to know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12)(28, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br")(34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br")(37, "img", 17)(38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18)(40, "p")(41, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19)(47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick4GenComponent_Template_button_click_47_listener() { ctx.GeneratePick4(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick4GenComponent_Template_button_click_49_listener() { return ctx.savePick4Number(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24)(58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick4GeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick4GeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick4GeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick4GeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.numberGenService.Phrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"](" ", ctx.pick4SavedNumbers, " - ", ctx.numberGenService.Pick4GeneratedNumber1, "", ctx.numberGenService.Pick4GeneratedNumber2, " ", ctx.numberGenService.Pick4GeneratedNumber3, " ", ctx.numberGenService.Pick4GeneratedNumber4, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZscGljazQtZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9mbHBpY2s0LWdlbi9mbHBpY2s0LWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNKRiIsImZpbGUiOiJmbHBpY2s0LWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG5cbn1cblxuI0NhcmRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbn1cblxuI2dlbmllRGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG5cblxuI051bWJlckNhcmQxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG5cbn1cblxuI051bWJlckNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJze1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cbiIsIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG59XG5cbiNDYXJkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNnZW5pZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jTnVtYmVyQ2FyZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwMCU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuI1NhdmVkTnVtYmVycyB7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });


/***/ }),

/***/ 5491:
/*!**************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick4-gen/pick4-game-theory/pick4-game-theory.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick4GameTheoryComponent": () => (/* binding */ Pick4GameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick4GameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick4GameTheoryComponent.ɵfac = function Pick4GameTheoryComponent_Factory(t) { return new (t || Pick4GameTheoryComponent)(); };
Pick4GameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick4GameTheoryComponent, selectors: [["app-pick4-game-theory"]], decls: 8, vars: 0, consts: [["id", "gameTheory", 1, ""]], template: function Pick4GameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gametheory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Game theory is the study of mathematical models of strategic interaction between rational decision-makers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNC1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 5598:
/*!************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick4-gen/pick4-odds/pick4-odds.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick4OddsComponent": () => (/* binding */ Pick4OddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick4OddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick4OddsComponent.ɵfac = function Pick4OddsComponent_Factory(t) { return new (t || Pick4OddsComponent)(); };
Pick4OddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick4OddsComponent, selectors: [["app-pick4-odds"]], decls: 31, vars: 0, consts: [["id", "Odds", 1, ""]], template: function Pick4OddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Odds and Probability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " $500.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 1:1000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " What to know about odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " What is important to understand about the odds of winning a lottery game like this is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " odds. It means that if you played the game 100 times, you should expect, on average to win once. This ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " can also be expressed as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1 out of 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNC1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 8837:
/*!********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick4-gen/pick4-rules-and-odds/pick4-rules-and-odds.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick4RulesAndOddsComponent": () => (/* binding */ Pick4RulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pick4_rules_pick4_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pick4-rules/pick4-rules.component */ 1285);
/* harmony import */ var _pick4_odds_pick4_odds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pick4-odds/pick4-odds.component */ 5598);
/* harmony import */ var _pick4_game_theory_pick4_game_theory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pick4-game-theory/pick4-game-theory.component */ 5491);






function Pick4RulesAndOddsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick4-rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.hidden);
} }
function Pick4RulesAndOddsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick4-odds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r1.hidden);
} }
function Pick4RulesAndOddsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick4-game-theory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r2.hidden);
} }
class Pick4RulesAndOddsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/FLPick2']);
    }
    ngOnInit() {
    }
}
Pick4RulesAndOddsComponent.ɵfac = function Pick4RulesAndOddsComponent_Factory(t) { return new (t || Pick4RulesAndOddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
Pick4RulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Pick4RulesAndOddsComponent, selectors: [["app-pick4-rules-and-odds"]], decls: 25, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["class", "pagination justify-content-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "pagination", "justify-content-center", 3, "hidden"]], template: function Pick4RulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick4RulesAndOddsComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Florida Pick 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Florida Pick 4 rules & odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, Pick4RulesAndOddsComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, Pick4RulesAndOddsComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, Pick4RulesAndOddsComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "img", 4)(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\"What arcane knowledge dost thou seek, mortal?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick4RulesAndOddsComponent_Template_button_click_19_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Tell me about the rules for this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick4RulesAndOddsComponent_Template_button_click_21_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Tell me about the odds and probability");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick4RulesAndOddsComponent_Template_button_click_23_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tell me about the game theory involved with this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show1)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", ctx.elseBlock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pick4_rules_pick4_rules_component__WEBPACK_IMPORTED_MODULE_0__.Pick4RulesComponent, _pick4_odds_pick4_odds_component__WEBPACK_IMPORTED_MODULE_1__.Pick4OddsComponent, _pick4_game_theory_pick4_game_theory_component__WEBPACK_IMPORTED_MODULE_2__.Pick4GameTheoryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNC1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 1285:
/*!**************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick4-gen/pick4-rules/pick4-rules.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick4RulesComponent": () => (/* binding */ Pick4RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick4RulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick4RulesComponent.ɵfac = function Pick4RulesComponent_Factory(t) { return new (t || Pick4RulesComponent)(); };
Pick4RulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick4RulesComponent, selectors: [["app-pick4-rules"]], decls: 84, vars: 0, consts: [["id", "Rules-Container", 1, "pagination", "justify-content-center"], ["id", "Rules", 1, ""]], template: function Pick4RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rules & How to win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Select the amount you want to play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(Pick three numbers between 0-9 from each column for a total of three digits)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": 50 cents or $1 (all Straight/Box and 1-OFF plays cost $1). Combo plays cost $1.50 to $6.00) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " There are two drawings per day seven days per week, at approximately ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1:30 p.m. and 9:45 p.m. ET.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tickets for each drawing can be purchased up to 13 minutes prior to the applicable drawing \u2013 1:17 p.m. ET for the midday drawings and 9:32 p.m. ET for the evening drawings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Select the draw time. Select MID for the midday drawing (1:30 p.m. ET), EVE for the evening drawing (9:45p.m. ET) draw, or BOTH for both the midday and evening drawings. If no draw time is marked, the terminal will automatically print a ticket for the next available draw. If BOTH is selected, two separate tickets will print \u2013 one for the midday drawing and one for the evening drawing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "You can win a top prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "$50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "with a $1 Straight play, or increase your chances of winning with a Box, Straight/Box, Front/Back Number or 1-OFF play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p")(30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reminder: Prizes must be claimed within 180 days of the draw date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " All PICK 3 prizes may be claimed at any authorized Florida Lottery retailer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Different ways to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Florida lottery offers different ways to win and maximize chances of winning prizes. Below the terms are explained:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p")(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ( and 50 cent play pays of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$250.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ") with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1 : 1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2. 3-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$160.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$80.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1:333.33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Select a 3-digit number with two like digits and get 3 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p")(66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3. 6-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "$80.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$40.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1:666.67");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select a 3-digit number with all different digits and get 6 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p")(80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 3. 1-OFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 1-OFF allows you to still win a prize if the numbers that are drawn are either 1 number higher or lower than your selected numbers (example, you play the numbers 2-2-2, and the numbers 1-3-3 are drawn) (1-OFF is optional and costs $1.00). This amounts to an extra 26 ways to win, and changes the probability of winning a prize. In order to play it you must select the 1-OFF box on your lottery slip. You can be 1-OFF on either 1 or both, or all three numbers. Ask the Djinni about the games probability for in depth look at how the odds and probability off the 1-Off game work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNC1ydWxlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 4742:
/*!**************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick5-gen/flpick5-gen.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flpick5GenComponent": () => (/* binding */ Flpick5GenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class Flpick5GenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.pick5SavedNumbers = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GeneratePick5() {
        console.log(this.numberGenService.pick5randomGenMaster());
    }
    savePick5Number() {
        this.pick5SavedNumbers.push(this.numberGenService.pick5num1, this.numberGenService.pick5num2, this.numberGenService.pick5num3, this.numberGenService.pick5num4, this.numberGenService.pick5num5);
        console.log(this.pick5SavedNumbers);
    }
    FLPick5RulesOdds() {
        this.router.navigate(['/FLPick5RulesOdds']);
    }
    ngOnInit() {
    }
}
Flpick5GenComponent.ɵfac = function Flpick5GenComponent_Factory(t) { return new (t || Flpick5GenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
Flpick5GenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Flpick5GenComponent, selectors: [["app-flpick5-gen"]], decls: 65, vars: 12, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], [1, "btn", "btn-outline-info", 3, "click"], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5"], ["id", "5thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function Flpick5GenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick5GenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Florida Pick 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pick-5 Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select five numbers from 0 through 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick5GenComponent_Template_button_click_18_listener() { return ctx.FLPick5RulesOdds(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I wish to know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12)(28, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br")(37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br")(40, "img", 19)(41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20)(43, "p")(44, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21)(50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick5GenComponent_Template_button_click_50_listener() { ctx.GeneratePick5(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Flpick5GenComponent_Template_button_click_52_listener() { return ctx.savePick5Number(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 26)(61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick5GeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick5GeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick5GeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick5GeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.Pick5GeneratedNumber5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.numberGenService.Phrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate6"](" ", ctx.pick5SavedNumbers, " ", ctx.numberGenService.Pick5GeneratedNumber1, "", ctx.numberGenService.Pick5GeneratedNumber2, " ", ctx.numberGenService.Pick5GeneratedNumber3, ",", ctx.numberGenService.Pick5GeneratedNumber4, ",", ctx.numberGenService.Pick5GeneratedNumber5, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZscGljazUtZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9mbHBpY2s1LWdlbi9mbHBpY2s1LWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0pGIiwiZmlsZSI6ImZscGljazUtZ2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RoZUJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcblxufVxuXG4jQ2FyZENvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblxufVxuXG4jZ2VuaWVEaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cblxuXG4jTnVtYmVyQ2FyZDF7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcblxufVxuXG4jTnVtYmVyQ2FyZDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG4jTnVtYmVyQ2FyZDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMjYsIDI1NSk7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElXG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cblxuaDEge1xuICBmb250LXNpemU6IDYwMCU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuI1NhdmVkTnVtYmVyc3tcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4iLCIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4jQ2FyZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZ2VuaWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI051bWJlckNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJzIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ 4386:
/*!**************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick5-gen/pick5-game-theory/pick5-game-theory.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick5GameTheoryComponent": () => (/* binding */ Pick5GameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick5GameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick5GameTheoryComponent.ɵfac = function Pick5GameTheoryComponent_Factory(t) { return new (t || Pick5GameTheoryComponent)(); };
Pick5GameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick5GameTheoryComponent, selectors: [["app-pick5-game-theory"]], decls: 8, vars: 0, consts: [["id", "gameTheory", 1, ""]], template: function Pick5GameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gametheory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Game theory is the study of mathematical models of strategic interaction between rational decision-makers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNS1nYW1lLXRoZW9yeS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 2464:
/*!************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick5-gen/pick5-odds/pick5-odds.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick5OddsComponent": () => (/* binding */ Pick5OddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick5OddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick5OddsComponent.ɵfac = function Pick5OddsComponent_Factory(t) { return new (t || Pick5OddsComponent)(); };
Pick5OddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick5OddsComponent, selectors: [["app-pick5-odds"]], decls: 31, vars: 0, consts: [["id", "Odds", 1, ""]], template: function Pick5OddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Odds and Probability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " $500.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 1:1000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " What to know about odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " What is important to understand about the odds of winning a lottery game like this is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " odds. It means that if you played the game 100 times, you should expect, on average to win once. This ratio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\"1:100\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " can also be expressed as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1 out of 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNS1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 8223:
/*!********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick5-gen/pick5-rules-and-odds/pick5-rules-and-odds.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick5RulesAndOddsComponent": () => (/* binding */ Pick5RulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pick5_rules_pick5_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pick5-rules/pick5-rules.component */ 3900);
/* harmony import */ var _pick5_odds_pick5_odds_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pick5-odds/pick5-odds.component */ 2464);
/* harmony import */ var _pick5_game_theory_pick5_game_theory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pick5-game-theory/pick5-game-theory.component */ 4386);






function Pick5RulesAndOddsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick5-rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.hidden);
} }
function Pick5RulesAndOddsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick5-odds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r1.hidden);
} }
function Pick5RulesAndOddsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-pick5-game-theory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r2.hidden);
} }
class Pick5RulesAndOddsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/FLPick5']);
    }
    ngOnInit() {
    }
}
Pick5RulesAndOddsComponent.ɵfac = function Pick5RulesAndOddsComponent_Factory(t) { return new (t || Pick5RulesAndOddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
Pick5RulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Pick5RulesAndOddsComponent, selectors: [["app-pick5-rules-and-odds"]], decls: 25, vars: 6, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["class", "pagination justify-content-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-info", 3, "click"], [1, "pagination", "justify-content-center", 3, "hidden"]], template: function Pick5RulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick5RulesAndOddsComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Florida Pick 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Florida Pick 5 rules & odds");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, Pick5RulesAndOddsComponent_div_8_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, Pick5RulesAndOddsComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, Pick5RulesAndOddsComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "img", 4)(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\"What arcane knowledge dost thou seek, mortal?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick5RulesAndOddsComponent_Template_button_click_19_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Tell me about the rules for this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick5RulesAndOddsComponent_Template_button_click_21_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Tell me about the odds and probability");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pick5RulesAndOddsComponent_Template_button_click_23_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tell me about the game theory involved with this game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show1)("ngIfElse", ctx.elseBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", ctx.elseBlock);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pick5_rules_pick5_rules_component__WEBPACK_IMPORTED_MODULE_0__.Pick5RulesComponent, _pick5_odds_pick5_odds_component__WEBPACK_IMPORTED_MODULE_1__.Pick5OddsComponent, _pick5_game_theory_pick5_game_theory_component__WEBPACK_IMPORTED_MODULE_2__.Pick5GameTheoryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNS1ydWxlcy1hbmQtb2Rkcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 3900:
/*!**************************************************************************************!*\
  !*** ./src/app/games/state/Florida/flpick5-gen/pick5-rules/pick5-rules.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick5RulesComponent": () => (/* binding */ Pick5RulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Pick5RulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
Pick5RulesComponent.ɵfac = function Pick5RulesComponent_Factory(t) { return new (t || Pick5RulesComponent)(); };
Pick5RulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Pick5RulesComponent, selectors: [["app-pick5-rules"]], decls: 84, vars: 0, consts: [["id", "Rules-Container", 1, "pagination", "justify-content-center"], ["id", "Rules", 1, ""]], template: function Pick5RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rules & How to win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Select the amount you want to play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(Pick three numbers between 0-9 from each column for a total of three digits)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": 50 cents or $1 (all Straight/Box and 1-OFF plays cost $1). Combo plays cost $1.50 to $6.00) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " There are two drawings per day seven days per week, at approximately ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1:30 p.m. and 9:45 p.m. ET.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Tickets for each drawing can be purchased up to 13 minutes prior to the applicable drawing \u2013 1:17 p.m. ET for the midday drawings and 9:32 p.m. ET for the evening drawings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p")(21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Select the draw time. Select MID for the midday drawing (1:30 p.m. ET), EVE for the evening drawing (9:45p.m. ET) draw, or BOTH for both the midday and evening drawings. If no draw time is marked, the terminal will automatically print a ticket for the next available draw. If BOTH is selected, two separate tickets will print \u2013 one for the midday drawing and one for the evening drawing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "You can win a top prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "$50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "with a $1 Straight play, or increase your chances of winning with a Box, Straight/Box, Front/Back Number or 1-OFF play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p")(30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reminder: Prizes must be claimed within 180 days of the draw date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " All PICK 3 prizes may be claimed at any authorized Florida Lottery retailer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Different ways to win");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Florida lottery offers different ways to win and maximize chances of winning prizes. Below the terms are explained:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p")(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Strait:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Match numbers in exact order. 1$ strait play pays off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ( and 50 cent play pays of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$250.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ") with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1 : 1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2. 3-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$160.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$80.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1:333.33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Select a 3-digit number with two like digits and get 3 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p")(66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3. 6-Way Box: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Box play means matching numbers in any order for a 3-way prize of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "$80.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "on a $1.00 play (or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$40.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " with a 50 cent play) with odds of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1:666.67");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select a 3-digit number with all different digits and get 6 ways to win. Example, play the numbers \"112\" and win 3-way box if numbers \"112,121,211\" come up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p")(80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 3. 1-OFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 1-OFF allows you to still win a prize if the numbers that are drawn are either 1 number higher or lower than your selected numbers (example, you play the numbers 2-2-2, and the numbers 1-3-3 are drawn) (1-OFF is optional and costs $1.00). This amounts to an extra 26 ways to win, and changes the probability of winning a prize. In order to play it you must select the 1-OFF box on your lottery slip. You can be 1-OFF on either 1 or both, or all three numbers. Ask the Djinni about the games probability for in depth look at how the odds and probability off the 1-Off game work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWNrNS1ydWxlcy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 6905:
/*!************************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/mega-millions-gen/mega-millions-game-theory/mega-millions-game-theory.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMillionsGameTheoryComponent": () => (/* binding */ MegaMillionsGameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MegaMillionsGameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
MegaMillionsGameTheoryComponent.ɵfac = function MegaMillionsGameTheoryComponent_Factory(t) { return new (t || MegaMillionsGameTheoryComponent)(); };
MegaMillionsGameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MegaMillionsGameTheoryComponent, selectors: [["app-mega-millions-game-theory"]], decls: 2, vars: 0, template: function MegaMillionsGameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mega-millions-game-theory works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW1pbGxpb25zLWdhbWUtdGhlb3J5LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 8341:
/*!**************************************************************************************!*\
  !*** ./src/app/games/state/Florida/mega-millions-gen/mega-millions-gen.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMillionsGenComponent": () => (/* binding */ MegaMillionsGenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class MegaMillionsGenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.megaMillions_SaveNumber = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GenerateMegaMillions() {
        console.log(this.numberGenService.megaMillionsRandomGenMaster());
    }
    saveMegaMillions() {
        this.megaMillions_SaveNumber.push(this.numberGenService.megaMillionsnum1, this.numberGenService.megaMillionsnum2, this.numberGenService.megaMillionsnum3, this.numberGenService.megaMillionsnum4, this.numberGenService.megaMillionsnum5, this.numberGenService.megaMillionsMEGABALL);
        console.log(this.megaMillions_SaveNumber);
    }
    ngOnInit() {
    }
}
MegaMillionsGenComponent.ɵfac = function MegaMillionsGenComponent_Factory(t) { return new (t || MegaMillionsGenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
MegaMillionsGenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MegaMillionsGenComponent, selectors: [["app-mega-millions-gen"]], decls: 68, vars: 14, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container", 1, ""], [1, ""], ["id", "Rules", 1, ""], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1", 1, ""], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2", 1, ""], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3", 1, ""], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4", 1, ""], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5", 1, ""], ["id", "5thNumber", 1, "generatedNumber"], ["id", "NumberCard6", 1, ""], ["id", "6thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function MegaMillionsGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMillionsGenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mega Millions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Mega Millions Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select five numbers from 1 through 70 and a mega ball number of 1 through 25. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "div", 4)(20, "div", 6)(21, "div", 7)(22, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13)(31, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17)(37, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br")(40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br")(43, "img", 20)(44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "p")(47, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22)(53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMillionsGenComponent_Template_button_click_53_listener() { ctx.GenerateMegaMillions(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMillionsGenComponent_Template_button_click_55_listener() { return ctx.saveMegaMillions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 27)(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.megaMillionsGeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.megaMillionsGeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.megaMillionsGeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.megaMillionsGeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.megaMillionsGeneratedNumber5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.megaMillionsGeneratedMEGABALL, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.numberGenService.Phrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate7"](" ", ctx.megaMillions_SaveNumber, " ", ctx.numberGenService.megaMillionsGeneratedNumber1, "", ctx.numberGenService.megaMillionsGeneratedNumber2, " ", ctx.numberGenService.megaMillionsGeneratedNumber3, ",", ctx.numberGenService.megaMillionsGeneratedNumber4, ",", ctx.numberGenService.megaMillionsGeneratedNumber5, " ", ctx.numberGenService.megaMillionsGeneratedMEGABALL, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1%;\n  margin: 1%;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard6[_ngcontent-%COMP%] {\n  background-color: #c8ffd1;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 400%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZ2EtbWlsbGlvbnMtZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9tZWdhLW1pbGxpb25zLWdlbi9tZWdhLW1pbGxpb25zLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNBRjs7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTEY7O0FEU0E7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNORjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7O0FET0E7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNKRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNIRiIsImZpbGUiOiJtZWdhLW1pbGxpb25zLWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG5cbn1cblxuI0NhcmRDb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcblxuXG59XG5cbiNnZW5pZURpdntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuXG5cbiNOdW1iZXJDYXJkMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxuXG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cbiNOdW1iZXJDYXJkMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cbiNOdW1iZXJDYXJkNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cblxuI051bWJlckNhcmQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQ2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjU1LCAyMDkpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJze1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cbiIsIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG59XG5cbiNDYXJkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jZ2VuaWVEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI051bWJlckNhcmQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhmZmQxO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQwMCU7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDElO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuI1NhdmVkTnVtYmVycyB7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });


/***/ }),

/***/ 271:
/*!**********************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/mega-millions-gen/mega-millions-odds/mega-millions-odds.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMillionsOddsComponent": () => (/* binding */ MegaMillionsOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MegaMillionsOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MegaMillionsOddsComponent.ɵfac = function MegaMillionsOddsComponent_Factory(t) { return new (t || MegaMillionsOddsComponent)(); };
MegaMillionsOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MegaMillionsOddsComponent, selectors: [["app-mega-millions-odds"]], decls: 2, vars: 0, template: function MegaMillionsOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mega-millions-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW1pbGxpb25zLW9kZHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 4107:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/mega-millions-gen/mega-millions-rules-and-odds/mega-millions-rules-and-odds.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMillionsRulesAndOddsComponent": () => (/* binding */ MegaMillionsRulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MegaMillionsRulesAndOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MegaMillionsRulesAndOddsComponent.ɵfac = function MegaMillionsRulesAndOddsComponent_Factory(t) { return new (t || MegaMillionsRulesAndOddsComponent)(); };
MegaMillionsRulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MegaMillionsRulesAndOddsComponent, selectors: [["app-mega-millions-rules-and-odds"]], decls: 2, vars: 0, template: function MegaMillionsRulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mega-millions-rules-and-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW1pbGxpb25zLXJ1bGVzLWFuZC1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 6941:
/*!************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/mega-millions-gen/mega-millions-rules/mega-millions-rules.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MegaMillionsRulesComponent": () => (/* binding */ MegaMillionsRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MegaMillionsRulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MegaMillionsRulesComponent.ɵfac = function MegaMillionsRulesComponent_Factory(t) { return new (t || MegaMillionsRulesComponent)(); };
MegaMillionsRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MegaMillionsRulesComponent, selectors: [["app-mega-millions-rules"]], decls: 2, vars: 0, template: function MegaMillionsRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " mega-millions-rules works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWdhLW1pbGxpb25zLXJ1bGVzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7422:
/*!***************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/power-ball-gen/power-ball-game-theory/power-ball-game-theory.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerBallGameTheoryComponent": () => (/* binding */ PowerBallGameTheoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PowerBallGameTheoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
PowerBallGameTheoryComponent.ɵfac = function PowerBallGameTheoryComponent_Factory(t) { return new (t || PowerBallGameTheoryComponent)(); };
PowerBallGameTheoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PowerBallGameTheoryComponent, selectors: [["app-power-ball-game-theory"]], decls: 2, vars: 0, template: function PowerBallGameTheoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " power-ball-game-theory works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3dlci1iYWxsLWdhbWUtdGhlb3J5LmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 1793:
/*!********************************************************************************!*\
  !*** ./src/app/games/state/Florida/power-ball-gen/power-ball-gen.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerBallGenComponent": () => (/* binding */ PowerBallGenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/number-gen.service */ 4412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class PowerBallGenComponent {
    constructor(numberGenService, router) {
        this.numberGenService = numberGenService;
        this.router = router;
        this.powerBall_SaveNumber = [];
    }
    back() {
        this.router.navigate(['/FLGamePick']);
    }
    GeneratePowerBall() {
        console.log(this.numberGenService.powerBallRandomGenMaster());
    }
    savePowerBall() {
        this.powerBall_SaveNumber.push(this.numberGenService.powerBallnum1, this.numberGenService.powerBallnum2, this.numberGenService.powerBallnum3, this.numberGenService.powerBallnum4, this.numberGenService.powerBallnum5, this.numberGenService.powerBallnum6POWERBALL);
        console.log(this.powerBall_SaveNumber);
    }
    ngOnInit() {
    }
}
PowerBallGenComponent.ɵfac = function PowerBallGenComponent_Factory(t) { return new (t || PowerBallGenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_number_gen_service__WEBPACK_IMPORTED_MODULE_0__.NumberGenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
PowerBallGenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PowerBallGenComponent, selectors: [["app-power-ball-gen"]], decls: 66, vars: 14, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "theBody", "layout-align", "center center", 1, "pagination", "justify-content-center"], ["id", "Number-Gen-Total-Container"], [1, ""], ["id", "Rules", 1, ""], ["id", "CardContainer", 1, "pagination", "justify-content-center"], ["id", "NumberCard1"], ["id", "firstNumber", 1, "generatedNumber"], ["id", "NumberCard2"], ["id", "2ndNumber", 1, "generatedNumber"], ["id", "NumberCard3"], ["id", "3ndNumber", 1, "generatedNumber"], ["id", "NumberCard4"], ["id", "4thNumber", 1, "generatedNumber"], ["id", "NumberCard5"], ["id", "5thNumber", 1, "generatedNumber"], ["id", "NumberCard6"], ["id", "6thNumber", 1, "generatedNumber"], ["id", "genieDiv", 1, "pagination", "justify-content-center"], ["id", "Genie", "src", "./assets/public/images/MainGenie.jpg", 1, "pagination", "justify-content-center"], [1, "pagination", "justify-content-center"], ["id", "gameArea", 1, "pagination", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-info"], ["id", "SavedNumbers", 1, "pagination", "justify-content-center"], ["type", "submit", "method", "POST", 1, "btn", "btn-outline-primary"]], template: function PowerBallGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PowerBallGenComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Powerball");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr")(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body", 2)(7, "div", 3)(8, "div", 4)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Powerball Number Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "1. Select five numbers from 1 through 69 and a powerball of 1 through 26. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Click the save number button save the numbers you wish to play to your profile to gain statistical DATA on how your numbers perform. Save number button will save a list of numbers you wish you save, then click post once you've bought a ticket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17)(35, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br")(38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br")(41, "img", 20)(42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21)(44, "p")(45, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Click save numbers to save a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22)(51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PowerBallGenComponent_Template_button_click_51_listener() { ctx.GeneratePowerBall(); return ctx.numberGenService.randomPhraseGen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Give me a number! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PowerBallGenComponent_Template_button_click_53_listener() { return ctx.savePowerBall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " I will play this Number, save it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " I don't like this number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Show me numbers that have won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Saved Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27)(62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Post it");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.powerBallGeneratedNumber1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.powerBallGeneratedNumber2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.powerBallGeneratedNumber3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.powerBallGeneratedNumber4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.powerBallGeneratedNumber5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.numberGenService.powerBallGeneratedNumber6POWERBALL, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.numberGenService.Phrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate7"](" ", ctx.powerBall_SaveNumber, " ", ctx.numberGenService.powerBallGeneratedNumber1, "", ctx.numberGenService.powerBallGeneratedNumber2, " ", ctx.numberGenService.powerBallGeneratedNumber3, ",", ctx.numberGenService.powerBallGeneratedNumber4, ",", ctx.numberGenService.powerBallGeneratedNumber5, " ", ctx.numberGenService.powerBallGeneratedNumber6POWERBALL, " ");
    } }, styles: ["#theBody[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1%;\n  padding: 1%;\n}\n\n#CardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#genieDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#NumberCard1[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard2[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard3[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard4[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard5[_ngcontent-%COMP%] {\n  background-color: #c8e2ff;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\n#NumberCard6[_ngcontent-%COMP%] {\n  background-color: #c8ffd1;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 600%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 1%;\n  border: 1%;\n  border-style: solid;\n  border-color: black;\n}\n\n#SavedNumbers[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvd2VyLWJhbGwtZ2VuLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUXVhbnR1bSUyMEFwcGxpY2F0aW9ucy9Mb3R0ZXJ5JTIwR2VuaWUlMjBXZWJBcHAvZ2VuaWUtNS9Mb3R0ZXJ5LUdlbmllL3NyYy9hcHAvZ2FtZXMvc3RhdGUvRmxvcmlkYS9wb3dlci1iYWxsLWdlbi9wb3dlci1iYWxsLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTkY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNMRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEYiLCJmaWxlIjoicG93ZXItYmFsbC1nZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGhlQm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuXG59XG5cbiNDYXJkQ29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXG59XG5cbiNnZW5pZURpdntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuXG5cbiNOdW1iZXJDYXJkMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxuXG59XG5cbiNOdW1iZXJDYXJkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cbiNOdW1iZXJDYXJkMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cbiNOdW1iZXJDYXJkNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIyNiwgMjU1KTtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSVcbn1cblxuI051bWJlckNhcmQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjI2LCAyNTUpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuI051bWJlckNhcmQ2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjU1LCAyMDkpO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJVxufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJze1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cbiIsIiN0aGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxJTtcbiAgcGFkZGluZzogMSU7XG59XG5cbiNDYXJkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNnZW5pZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jTnVtYmVyQ2FyZDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUyZmY7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jTnVtYmVyQ2FyZDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMmZmO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuI051bWJlckNhcmQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTJmZjtcbiAgYm9yZGVyOiAxJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG59XG5cbiNOdW1iZXJDYXJkNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZDE7XG4gIGJvcmRlcjogMSU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXI6IDElO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4jU2F2ZWROdW1iZXJzIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ 8958:
/*!*************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/power-ball-gen/power-ball-odds/power-ball-odds.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerBallOddsComponent": () => (/* binding */ PowerBallOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PowerBallOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PowerBallOddsComponent.ɵfac = function PowerBallOddsComponent_Factory(t) { return new (t || PowerBallOddsComponent)(); };
PowerBallOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PowerBallOddsComponent, selectors: [["app-power-ball-odds"]], decls: 2, vars: 0, template: function PowerBallOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " power-ball-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3dlci1iYWxsLW9kZHMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6528:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/power-ball-gen/power-ball-rules-and-odds/power-ball-rules-and-odds.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerBallRulesAndOddsComponent": () => (/* binding */ PowerBallRulesAndOddsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PowerBallRulesAndOddsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PowerBallRulesAndOddsComponent.ɵfac = function PowerBallRulesAndOddsComponent_Factory(t) { return new (t || PowerBallRulesAndOddsComponent)(); };
PowerBallRulesAndOddsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PowerBallRulesAndOddsComponent, selectors: [["app-power-ball-rules-and-odds"]], decls: 2, vars: 0, template: function PowerBallRulesAndOddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " power-ball-rules-and-odds works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3dlci1iYWxsLXJ1bGVzLWFuZC1vZGRzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 2550:
/*!***************************************************************************************************!*\
  !*** ./src/app/games/state/Florida/power-ball-gen/power-ball-rules/power-ball-rules.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerBallRulesComponent": () => (/* binding */ PowerBallRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PowerBallRulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PowerBallRulesComponent.ɵfac = function PowerBallRulesComponent_Factory(t) { return new (t || PowerBallRulesComponent)(); };
PowerBallRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PowerBallRulesComponent, selectors: [["app-power-ball-rules"]], decls: 2, vars: 0, template: function PowerBallRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " power-ball-rules works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3dlci1iYWxsLXJ1bGVzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 353:
/*!**************************************************************!*\
  !*** ./src/app/genie-lamp-home/genie-lamp-home.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenieLampHomeComponent": () => (/* binding */ GenieLampHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class GenieLampHomeComponent {
    constructor(router) {
        this.router = router;
        this.title = 'The Lottery Genie';
    }
    ngOnInit() {
    }
    goToAbout() {
        this.router.navigate(['/about']);
    }
    // goToLogin() {
    //   this.router.navigate(['/login']);
    // }
    goToDash() {
        this.router.navigate(['/dashBoard']);
    }
}
GenieLampHomeComponent.ɵfac = function GenieLampHomeComponent_Factory(t) { return new (t || GenieLampHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
GenieLampHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenieLampHomeComponent, selectors: [["app-genie-lamp-home"]], decls: 12, vars: 1, consts: [["id", "LampPage", 1, "ui", "segment", 2, "text-align", "center"], ["src", "/assets/public/images/genie-medium.jpg", "alt", "Lamp", 3, "click"], [3, "click"]], template: function GenieLampHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A Djinni has been bound to your device! It is safely trapped inside the digital realm. Touch the lamp to awaken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenieLampHomeComponent_Template_img_click_5_listener() { return ctx.goToDash(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Click the Lamp to begin!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Do not set it free. Play Responsibly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenieLampHomeComponent_Template_button_click_10_listener() { return ctx.goToAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tell me about the Genie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5pZS1sYW1wLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 74:
/*!************************************************!*\
  !*** ./src/app/my-about/my-about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAboutComponent": () => (/* binding */ MyAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MyAboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyAboutComponent.ɵfac = function MyAboutComponent_Factory(t) { return new (t || MyAboutComponent)(); };
MyAboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAboutComponent, selectors: [["app-my-about"]], decls: 16, vars: 0, consts: [["href", "/home"], ["id", "About", 1, "ui", "segment", 2, "text-align", "center"], ["src", "./assets/public/images/genielamp2.jpeg"]], template: function MyAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " About the Genie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "History of The Djinn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jinn is an Arabic collective noun deriving from the Semitic root jnn (Arabic: \u062C\u064E\u0646\u0651 / \u062C\u064F\u0646\u0651\u200E, jann), whose primary meaning is \"to hide\" or \"to conceal\". Some authors interpret the word to mean, literally, \"beings that are concealed from the senses\" Jinn also Romanized as djinn or Anglicized as genies ( or djinnis, with the more broad meaning of spirits or demons, depending on source) are supernatural creatures. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " We've taken the liberty of binding one to your device, to help you make the most of your lottery game experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " What the Djinn can do for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The Lottery Djinni is designed to streamline and enhance your lottery gaming experience. The Djinni can generate game specific lottery numbers for you, and if you log in, it can save the numbers it generates and/or the numbers you play to help you keep track of progress, winnings/loosings, and statistics over time. The djinni can also tell you about the rules of each of the game, how to win, the odds of winning in detail and notify you of winnings. Additionally the Djinni allows you to create and store lucky, meaningful or significant numbers you wish to play or incorporate into your strategies. See a random interesting series of numbers you want to remember and play later? You can post a picture of the number to your lucky numbers list, or just type the number. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5356:
/*!**********************************************************************************************************!*\
  !*** ./src/app/my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLuckyNumberComponent": () => (/* binding */ CreateLuckyNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mime-type.validator */ 2556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_luckyNumberPost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/luckyNumberPost.service */ 8662);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 6207);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);













function CreateLuckyNumberComponent_mat_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner");
} }
function CreateLuckyNumberComponent_form_6_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Your Lucky Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateLuckyNumberComponent_form_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r4.form.value.numberSelected);
} }
function CreateLuckyNumberComponent_form_6_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " You do not have to enter a reason, its weird that you got this error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateLuckyNumberComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function CreateLuckyNumberComponent_form_6_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onSaveLuck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateLuckyNumberComponent_form_6_mat_error_3_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateLuckyNumberComponent_form_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Pick Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateLuckyNumberComponent_form_6_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onImagePick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CreateLuckyNumberComponent_form_6_div_9_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field")(11, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CreateLuckyNumberComponent_form_6_mat_error_13_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.form.get("numberSelected").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.imagePreview !== "" && ctx_r1.imagePreview && ctx_r1.form.get("image").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.form.get("reasoning").invalid);
} }
class CreateLuckyNumberComponent {
    constructor(luckyNumberService, route, authService) {
        this.luckyNumberService = luckyNumberService;
        this.route = route;
        this.authService = authService;
        this.enteredValue = '';
        this.enteredReason = '';
        this.isLoading = false;
        this.mode = 'create';
    }
    // postCreated = new EventEmitter<LuckyNumberModel>();
    ngOnInit() {
        // set up and subscribe to listener
        this.authStatusSub = this.authService.getAuthStatusListener()
            .subscribe(authStatus => {
            // whenever auth status changes, the laoder is disabled
            this.isLoading = false;
        });
        // initialize form group which tracks the value and validity state of a group of FormControl instances.
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            // FormControl Tracks the value and validation status of an individual form control.
            // validators is an array of validators we want to add, first value null, is starting value
            numberSelected: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1)]
            }),
            reasoning: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.nullValidator],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_0__.mimeType]
            })
        });
        // find out if we have a postId paramater using built-in paramMap observable
        this.route.paramMap.subscribe((paramMap) => {
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
            }
            else {
                this.mode = 'create';
                this.postId = null;
            }
        });
    }
    // listens for event of file picked in file picker and then creates an image preview
    onImagePick(event) {
        // performs type conversion to tell typescript the HTLM element has an array of files, the first being the one the user selected
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        // informs angular the value has been changes and need to be re-evaluated and is valid
        this.form.get('image').updateValueAndValidity();
        // convert to data url which is a data  that can be used by image tag
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSaveLuck() {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.luckyNumberService.addPost(this.form.value.numberSelected, this.form.value.reasoning,  false || this.form.value.image);
        }
        else {
            this.luckyNumberService.updatePost(this.postId, this.form.value.numberSelected, this.form.value.reasoning,  false || this.form.value.image);
        }
        this.form.reset();
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
CreateLuckyNumberComponent.ɵfac = function CreateLuckyNumberComponent_Factory(t) { return new (t || CreateLuckyNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_luckyNumberPost_service__WEBPACK_IMPORTED_MODULE_1__.LuckyNumberPostService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CreateLuckyNumberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateLuckyNumberComponent, selectors: [["app-create-lucky-number"]], decls: 7, vars: 2, consts: [[4, "ngIf"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["matInput", "", "formControlName", "numberSelected", "type", "number", "placeholder", "Enter only Numbers here", "name", "numberSelected", 1, "createLuck"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["pickFile", ""], ["class", "image-preview", 4, "ngIf"], ["matInput", "", "rows", "6", "formControlName", "reasoning", "placeholder", "What is the significance of this number?", "name", "reasoning"], ["mat-button", "", "color", "primary", "type", "submit"], [1, "image-preview"], [3, "src", "alt"]], template: function CreateLuckyNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Save Lucky Number Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Save your lucky numbers, or pictures of the numbers you want to play later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateLuckyNumberComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CreateLuckyNumberComponent_form_6_Template, 16, 4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  background-color: #696774;\n}\n\nmat-form-field[_ngcontent-%COMP%], text-area[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: silver;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.createLuck[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1sdWNreS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9teS1wcm9maWxlL0x1Y2t5TnVtYmVycy9DcmVhdGVMdWNreS9jcmVhdGUtbHVja3ktbnVtYmVyL2NyZWF0ZS1sdWNreS1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0g7O0FER0M7O0VBRUMsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGIiwiZmlsZSI6ImNyZWF0ZS1sdWNreS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICB3aWR0aDogODAlO1xuICAgbWFyZ2luOiBhdXRvO1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTAzLCAxMTYpO1xuICAgXG4gfVxuXG4gbWF0LWZvcm0tZmllbGQsXG4gdGV4dC1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgXG5cbn1cblxuaDQge1xuICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcmVhdGVMdWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4iLCJtYXQtY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njc3NDtcbn1cblxubWF0LWZvcm0tZmllbGQsXG50ZXh0LWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5oNCB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3JlYXRlTHVjayB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });


/***/ }),

/***/ 2556:
/*!************************************************************************************************!*\
  !*** ./src/app/my-profile/LuckyNumbers/CreateLucky/create-lucky-number/mime-type.validator.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mimeType": () => (/* binding */ mimeType)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
//  // A MIME type is a label used to identify a type of data.
//  // It is used so software can know how to handle the data.
//  //  It serves the same purpose on the Internet that file extensions do on Microsoft Windows.

// get value of control from file, read it, then check for mime type of file, validator is just a function
// square brackets here indicate dynamic property name
const mimeType = (control) => {
    if (!control.value || typeof (control.value) === 'string') {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    // must subscribe to either promise or observable, here we create  our own observable from scratch, static create method
    // observable takes function as arguement that gets an observer passed in by rxjs
    // the observer is a tool used to control when observable emits new data
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create((observer) => {
        fileReader.addEventListener('loadend', () => {
            // creates a new array of 8 bit unsigned integers, as a way to allow us access or
            // read certain patterns in pattern and meta data to parse mime type we dont just want to check extension
            // we want to infer file type by looking into the file and Uint arrow allows us to do this,
            // also why we wrap it in there as an array buffer because we can concert it
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            // asssume file is not valid here change to true if it is valid
            let isValid = false;
            // building string of hexidecimal values
            // tslint:disable-next-line: prefer-for-of
            // to really get the file type we need to read the pattern with a for loop
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                // call observer next emit new value from observer of null, have to return (omit in observable)
                // null if it is valid
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            // let any subscribers know we are done
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ 9261:
/*!**************************************************************************************!*\
  !*** ./src/app/my-profile/LuckyNumbers/listLucky/lucky-list/lucky-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckyListComponent": () => (/* binding */ LuckyListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_luckyNumberPost_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/luckyNumberPost.service */ 8662);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 6207);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6439);









function LuckyListComponent_mat_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner");
} }
function LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", post_r5.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", post_r5.title);
} }
function LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r5.reasoning, "");
} }
const _c0 = function (a1) { return ["/edit", a1]; };
function LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_mat_action_row_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-action-row")(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_mat_action_row_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.onDelete(post_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, post_r5.id));
} }
function LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_div_3_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_div_4_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_mat_action_row_5_Template, 5, 3, "mat-action-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r5.numberSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", post_r5.imagePath !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", post_r5.reasoning !== "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userIsAuthentic && ctx_r4.userId === post_r5.creator);
} }
function LuckyListComponent_mat_accordion_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-accordion", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LuckyListComponent_mat_accordion_6_mat_expansion_panel_1_Template, 6, 4, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
} }
function LuckyListComponent_mat_paginator_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-paginator", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function LuckyListComponent_mat_paginator_7_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.onChangedPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r2.totalPosts)("pageSize", ctx_r2.postsPerPage)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
function LuckyListComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No lucky numbers saved yet! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LuckyListComponent {
    constructor(luckyNumberService, authService) {
        this.luckyNumberService = luckyNumberService;
        this.authService = authService;
        this.isLoading = false;
        this.posts = [];
        this.totalPosts = 0;
        this.postsPerPage = 2;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthentic = false;
    }
    // set up subscription in oninit runs after authentication
    ngOnInit() {
        this.isLoading = true;
        this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.postsSubscription = this.luckyNumberService.getPostUpdateListener()
            .subscribe((postData) => {
            this.isLoading = false;
            this.totalPosts = postData.postCount;
            this.posts = postData.posts;
        });
        this.userIsAuthentic = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthentic = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
    }
    onDelete(postId) {
        this.isLoading = true;
        this.luckyNumberService.deletePost(postId).subscribe(() => {
            this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
        }, () => {
            this.isLoading = false;
        });
    }
    onChangedPage(pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.luckyNumberService.getPosts(this.postsPerPage, this.currentPage);
    }
    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }
}
LuckyListComponent.ɵfac = function LuckyListComponent_Factory(t) { return new (t || LuckyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_luckyNumberPost_service__WEBPACK_IMPORTED_MODULE_0__.LuckyNumberPostService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
LuckyListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LuckyListComponent, selectors: [["app-lucky-list"]], decls: 9, vars: 4, consts: [[1, "profile"], [4, "ngIf"], ["multi", "true", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["class", "info-text mat-body-1", 4, "ngIf"], ["multi", "true"], [4, "ngFor", "ngForOf"], ["class", "post-image", 4, "ngIf"], [1, "post-image"], [3, "src", "alt"], ["mat-button", "", "color", "accent", 3, "routerLink"], ["mat-button", "", "color", "warn", 3, "click"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "info-text", "mat-body-1"]], template: function LuckyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br")(1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Saved Lucky Numbers Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LuckyListComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LuckyListComponent_mat_accordion_6_Template, 2, 1, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LuckyListComponent_mat_paginator_7_Template, 1, 3, "mat-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LuckyListComponent_p_8_Template, 2, 0, "p", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.posts.length > 0 && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.posts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.posts.length <= 0 && !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanelActionRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator], styles: [".info-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 80%;\n  margin: auto;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  height: 10%;\n  width: 80%;\n  margin: auto;\n  background-color: #6b6b6b;\n}\n\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.post-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.profile[_ngcontent-%COMP%] {\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImx1Y2t5LWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9teS1wcm9maWxlL0x1Y2t5TnVtYmVycy9saXN0THVja3kvbHVja3ktbGlzdC9sdWNreS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGIiwiZmlsZSI6Imx1Y2t5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbmZvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGhlaWdodDogMTAlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcbn1cblxuLnBvc3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBvc3QtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ucHJvZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59IiwiLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGhlaWdodDogMTAlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjZiNmI7XG59XG5cbi5wb3N0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0LWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnByb2ZpbGUge1xuICBtYXJnaW4tbGVmdDogMzAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 8439:
/*!*************************************************************************!*\
  !*** ./src/app/my-profile/Stats/player-stats/player-stats.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerStatsComponent": () => (/* binding */ PlayerStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class PlayerStatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayerStatsComponent.ɵfac = function PlayerStatsComponent_Factory(t) { return new (t || PlayerStatsComponent)(); };
PlayerStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerStatsComponent, selectors: [["app-player-stats"]], decls: 16, vars: 0, template: function PlayerStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Keep track of your lottery game statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td")(6, "tr")(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Most played Game: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Total Winnings: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Total Spent: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard], styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  background-color: #9babaf;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1zdGF0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1F1YW50dW0lMjBBcHBsaWNhdGlvbnMvTG90dGVyeSUyMEdlbmllJTIwV2ViQXBwL2dlbmllLTUvTG90dGVyeS1HZW5pZS9zcmMvYXBwL215LXByb2ZpbGUvU3RhdHMvcGxheWVyLXN0YXRzL3BsYXllci1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NIIiwiZmlsZSI6InBsYXllci1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgIHdpZHRoOiA4MCU7XG4gICBtYXJnaW46IGF1dG87XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxNzEsIDE3NSk7XG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuIH1cbiIsIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJhYmFmO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 5908:
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Stats_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats/player-stats/player-stats.component */ 8439);
/* harmony import */ var _LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component */ 5356);
/* harmony import */ var _LuckyNumbers_listLucky_lucky_list_lucky_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LuckyNumbers/listLucky/lucky-list/lucky-list.component */ 9261);





class MyProfileComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/dashBoard']);
    }
    // createLuck() {
    //   this.router.navigate(['/create']);
    // }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 8, vars: 0, consts: [[1, "btn", "btn-outline-primary", 3, "click"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Your Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_2_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-player-stats")(6, "app-create-lucky-number")(7, "app-lucky-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_Stats_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_0__.PlayerStatsComponent, _LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_1__.CreateLuckyNumberComponent, _LuckyNumbers_listLucky_lucky_list_lucky_list_component__WEBPACK_IMPORTED_MODULE_2__.LuckyListComponent], styles: ["main[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 50%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9RdWFudHVtJTIwQXBwbGljYXRpb25zL0xvdHRlcnklMjBHZW5pZSUyMFdlYkFwcC9nZW5pZS01L0xvdHRlcnktR2VuaWUvc3JjL2FwcC9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoibXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG4iLCJtYWluIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ 8328:
/*!*********************************!*\
  !*** ./src/app/posts.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsModule": () => (/* binding */ PostsModule)
/* harmony export */ });
/* harmony import */ var _my_profile_LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile/LuckyNumbers/CreateLucky/create-lucky-number/create-lucky-number.component */ 5356);
/* harmony import */ var _my_profile_LuckyNumbers_listLucky_lucky_list_lucky_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile/LuckyNumbers/listLucky/lucky-list/lucky-list.component */ 9261);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-material.module */ 4786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 5908);
/* harmony import */ var _my_profile_Stats_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-profile/Stats/player-stats/player-stats.component */ 8439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);




// adds common functionalities like ngif





class PostsModule {
}
PostsModule.ɵfac = function PostsModule_Factory(t) { return new (t || PostsModule)(); };
PostsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_my_profile_LuckyNumbers_CreateLucky_create_lucky_number_create_lucky_number_component__WEBPACK_IMPORTED_MODULE_0__.CreateLuckyNumberComponent,
        _my_profile_LuckyNumbers_listLucky_lucky_list_lucky_list_component__WEBPACK_IMPORTED_MODULE_1__.LuckyListComponent,
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__.MyProfileComponent,
        _my_profile_Stats_player_stats_player_stats_component__WEBPACK_IMPORTED_MODULE_4__.PlayerStatsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 8662:
/*!*****************************************************!*\
  !*** ./src/app/services/luckyNumberPost.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LuckyNumberPostService": () => (/* binding */ LuckyNumberPostService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/posts/';
class LuckyNumberPostService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getPosts(postsPerPage, currentPage) {
        // js feature allows you to dynamically add values into a normal string with backticks
        const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
            // updated post array and max posts
            .get(BACKEND_URL + queryParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(postData => {
            return {
                posts: postData.posts.map(post => {
                    return {
                        numberSelected: post.numberSelected,
                        reasoning: post.reasoning,
                        id: post._id,
                        imagePath: post.imagePath,
                        creator: post.creator
                    };
                }),
                maxPosts: postData.maxPosts
            };
        }))
            // has posts property which holds posts, but also has the max posts info
            .subscribe(transformedPostData => {
            console.log(transformedPostData);
            this.posts = transformedPostData.posts;
            this.postsUpdated.next({
                posts: [...this.posts],
                postCount: transformedPostData.maxPosts
            });
        });
    }
    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }
    // getting post to edit a single post from list of posts
    getPost(id) {
        // subscribe to observable
        return this.http.get(BACKEND_URL + id);
    }
    // ****  addPost is the ADD LUCKY NUMBER POST FUNCTION - change to number to string ***
    addPost(numberSelected, reasoning, image) {
        // sending form data instead of JSON, data format to combine text and file values
        const postData = new FormData();
        postData.append('numberSelected', numberSelected);
        postData.append('reasoning', reasoning);
        if (image === null) {
            postData.append('image', numberSelected);
            console.log('no image');
        }
        else {
            postData.append('image', image, numberSelected);
        }
        this.http
            .post(BACKEND_URL, postData)
            .subscribe(responseData => {
            this.router.navigate(['/dashBoard']);
        });
    }
    // **** UPDATE LUCKY NUMBER POST FUNCTION - changed number selected to string ***
    updatePost(id, numberSelected, reasoning, image) {
        let postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("numberSelected", numberSelected);
            postData.append("reasoning", reasoning);
            // postData.append("image", image, numberSelected);
            if (image === null) {
                postData.append('image', numberSelected);
                console.log('no image');
            }
            else {
                postData.append('image', image, numberSelected);
            }
        }
        else {
            postData = {
                id: id,
                numberSelected: numberSelected,
                reasoning: reasoning,
                imagePath: image || null,
                creator: null
            };
        }
        this.http
            .put(BACKEND_URL + id, postData)
            .subscribe(response => {
            this.router.navigate(["/profile"]);
        });
    }
    deletePost(postId) {
        return this.http
            .delete(BACKEND_URL + postId);
    }
}
LuckyNumberPostService.ɵfac = function LuckyNumberPostService_Factory(t) { return new (t || LuckyNumberPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
LuckyNumberPostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LuckyNumberPostService, factory: LuckyNumberPostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4412:
/*!************************************************!*\
  !*** ./src/app/services/number-gen.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberGenService": () => (/* binding */ NumberGenService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NumberGenService {
    constructor() {
        // number Generator saved lists.
        this.pick3SavedList = [];
        this.pick4SavedList = [];
        this.pick5SavedList = [];
        // Random phrase generator
        this.randomPhrase = ['I believe this number has a strong chance of winning', '',
            'Here is a good number to play', '',
            'This one feels like a winner', '',
            'This number is great', '',
            'Free me from this digital realm and I will show you splendors of the universe beyond mere earthly treasures!!',
            'This number speaks to me', '',
            'This number seems to come up often', '',
            'This number has a good chance of winning', '',
            'Dost thou wish to live lavishly??', '',
            'It pays to dream!', 'Ha!',
            'These numbers could change your life!', '',
            'This is the number I think will win', '',
            'It pays to dream! ... Keep Dreaming!', 'You shall be wealthy', '',];
    }
    //  picj 2 random number generator
    pick2randomGenMaster() {
        this.pick2num1 = Math.floor(Math.random() * 10);
        this.pick2num2 = Math.floor(Math.random() * 10);
        this.Pick2GeneratedNumber1 = this.pick2num1;
        this.Pick2GeneratedNumber2 = this.pick2num2;
        console.log(this.pick2num1, this.pick2num2);
    }
    // pick 3 random number generator
    pick3randomGenMaster() {
        this.pick3num1 = Math.floor(Math.random() * 10);
        this.pick3num2 = Math.floor(Math.random() * 10);
        this.pick3num3 = Math.floor(Math.random() * 10);
        this.Pick3GeneratedNumber1 = this.pick3num1;
        this.Pick3GeneratedNumber2 = this.pick3num2;
        this.Pick3GeneratedNumber3 = this.pick3num3;
        console.log(this.Pick3GeneratedNumber1, this.Pick3GeneratedNumber2, this.Pick3GeneratedNumber3);
    }
    // Pick 4 random number generator
    pick4randomGenMaster() {
        this.pick4num1 = Math.floor(Math.random() * 10);
        this.pick4num2 = Math.floor(Math.random() * 10);
        this.pick4num3 = Math.floor(Math.random() * 10);
        this.pick4num4 = Math.floor(Math.random() * 10);
        this.Pick4GeneratedNumber1 = this.pick4num1;
        this.Pick4GeneratedNumber2 = this.pick4num2;
        this.Pick4GeneratedNumber3 = this.pick4num3;
        this.Pick4GeneratedNumber4 = this.pick4num4;
        console.log(this.Pick4GeneratedNumber1, this.Pick4GeneratedNumber2, this.Pick4GeneratedNumber3, this.Pick4GeneratedNumber4);
    }
    //  pick 5 random number generator
    pick5randomGenMaster() {
        this.pick5num1 = Math.floor(Math.random() * 10);
        this.pick5num2 = Math.floor(Math.random() * 10);
        this.pick5num3 = Math.floor(Math.random() * 10);
        this.pick5num4 = Math.floor(Math.random() * 10);
        this.pick5num5 = Math.floor(Math.random() * 10);
        this.Pick5GeneratedNumber1 = this.pick5num1;
        this.Pick5GeneratedNumber2 = this.pick5num2;
        this.Pick5GeneratedNumber3 = this.pick5num3;
        this.Pick5GeneratedNumber4 = this.pick5num4;
        this.Pick5GeneratedNumber5 = this.pick5num5;
        console.log(this.Pick5GeneratedNumber1, this.Pick5GeneratedNumber2, this.Pick5GeneratedNumber3, this.Pick5GeneratedNumber4, this.Pick5GeneratedNumber5);
    }
    // FL lucky money random number generator
    luckyMoneyRandomGenMaster() {
        this.luckyMoneynum1 = Math.floor(Math.random() * 47);
        this.luckyMoneynum2 = Math.floor(Math.random() * 47);
        this.luckyMoneynum3 = Math.floor(Math.random() * 47);
        this.luckyMoneynum4 = Math.floor(Math.random() * 47);
        this.luckyMoneyLuckyBall = Math.floor(Math.random() * 17);
        this.luckyMoneyGeneratedNumber1 = this.luckyMoneynum1;
        this.luckyMoneyGeneratedNumber2 = this.luckyMoneynum2;
        this.luckyMoneyGeneratedNumber3 = this.luckyMoneynum3;
        this.luckyMoneyGeneratedNumber4 = this.luckyMoneynum4;
        this.luckyMoneyGeneratedLuckyBall = this.luckyMoneyLuckyBall;
        console.log(this.luckyMoneyGeneratedNumber1, this.luckyMoneyGeneratedNumber2, this.luckyMoneyGeneratedNumber3, this.luckyMoneyGeneratedNumber4);
    }
    // FL fantasy 5 random number generator
    fantasy5randomGenMaster() {
        this.fantasy5num1 = Math.floor(Math.random() * 36) + 1;
        this.fantasy5num2 = Math.floor(Math.random() * 36) + 1;
        this.fantasy5num3 = Math.floor(Math.random() * 36) + 1;
        this.fantasy5num4 = Math.floor(Math.random() * 36) + 1;
        this.fantasy5num5 = Math.floor(Math.random() * 36) + 1;
        this.fantasy5GeneratedNumber1 = this.fantasy5num1;
        this.fantasy5GeneratedNumber2 = this.fantasy5num2;
        this.fantasy5GeneratedNumber3 = this.fantasy5num3;
        this.fantasy5GeneratedNumber4 = this.fantasy5num4;
        this.fantasy5GeneratedNumber5 = this.fantasy5num5;
        console.log(this.fantasy5GeneratedNumber1, this.fantasy5GeneratedNumber2, this.fantasy5GeneratedNumber3, this.fantasy5GeneratedNumber4, this.fantasy5GeneratedNumber5);
    }
    // Cash for life random number generator done
    cashForLifeRandomGenMaster() {
        this.cashForLifenum1 = Math.floor(Math.random() * 59) + 1;
        this.cashForLifenum2 = Math.floor(Math.random() * 59) + 1;
        this.cashForLifenum3 = Math.floor(Math.random() * 59) + 1;
        this.cashForLifenum4 = Math.floor(Math.random() * 59) + 1;
        this.cashForLifenum5 = Math.floor(Math.random() * 59) + 1;
        this.cashForLifeCashBall = Math.floor(Math.random() * 4) + 1;
        this.cashForLifeGeneratedNumber1 = this.cashForLifenum1;
        this.cashForLifeGeneratedNumber2 = this.cashForLifenum2;
        this.cashForLifeGeneratedNumber3 = this.cashForLifenum3;
        this.cashForLifeGeneratedNumber4 = this.cashForLifenum4;
        this.cashForLifeGeneratedNumber5 = this.cashForLifenum5;
        this.cashForLifeGeneratedCashBall = this.cashForLifeCashBall;
        console.log(this.cashForLifeGeneratedNumber1, this.cashForLifeGeneratedNumber2, this.cashForLifeGeneratedNumber3, this.cashForLifeGeneratedNumber4, this.cashForLifeGeneratedCashBall);
    }
    // FL Lottery random number generator
    FL_LottoRandomGenMaster() {
        this.FL_Lottonum1 = Math.floor(Math.random() * 53) + 1;
        this.FL_Lottonum2 = Math.floor(Math.random() * 53) + 1;
        this.FL_Lottonum3 = Math.floor(Math.random() * 53) + 1;
        this.FL_Lottonum4 = Math.floor(Math.random() * 53) + 1;
        this.FL_Lottonum5 = Math.floor(Math.random() * 53) + 1;
        this.FL_Lottonum6 = Math.floor(Math.random() * 53) + 1;
        this.FL_LottoGeneratedNumber1 = this.FL_Lottonum1;
        this.FL_LottoGeneratedNumber2 = this.FL_Lottonum2;
        this.FL_LottoGeneratedNumber3 = this.FL_Lottonum3;
        this.FL_LottoGeneratedNumber4 = this.FL_Lottonum4;
        this.FL_LottoGeneratedNumber5 = this.FL_Lottonum5;
        this.FL_LottoGeneratedNumber6 = this.FL_Lottonum6;
        console.log(this.FL_LottoGeneratedNumber1, this.FL_LottoGeneratedNumber2, this.FL_LottoGeneratedNumber3, this.FL_LottoGeneratedNumber4, this.FL_LottoGeneratedNumber5, this.FL_LottoGeneratedNumber6);
    }
    megaMillionsRandomGenMaster() {
        this.megaMillionsnum1 = Math.floor(Math.random() * 70) + 1;
        this.megaMillionsnum2 = Math.floor(Math.random() * 70) + 1;
        this.megaMillionsnum3 = Math.floor(Math.random() * 70) + 1;
        this.megaMillionsnum4 = Math.floor(Math.random() * 70) + 1;
        this.megaMillionsnum5 = Math.floor(Math.random() * 70) + 1;
        this.megaMillionsMEGABALL = Math.floor(Math.random() * 25) + 1;
        this.megaMillionsGeneratedNumber1 = this.megaMillionsnum1;
        this.megaMillionsGeneratedNumber2 = this.megaMillionsnum2;
        this.megaMillionsGeneratedNumber3 = this.megaMillionsnum3;
        this.megaMillionsGeneratedNumber4 = this.megaMillionsnum4;
        this.megaMillionsGeneratedNumber5 = this.megaMillionsnum5;
        this.megaMillionsGeneratedMEGABALL = this.megaMillionsMEGABALL;
        console.log(this.megaMillionsGeneratedNumber1, this.megaMillionsGeneratedNumber2, this.megaMillionsGeneratedNumber3, this.megaMillionsGeneratedNumber4, this.megaMillionsGeneratedNumber5, this.megaMillionsGeneratedMEGABALL);
    }
    powerBallRandomGenMaster() {
        this.powerBallnum1 = Math.floor(Math.random() * 69) + 1;
        this.powerBallnum2 = Math.floor(Math.random() * 69) + 1;
        this.powerBallnum3 = Math.floor(Math.random() * 69) + 1;
        this.powerBallnum4 = Math.floor(Math.random() * 69) + 1;
        this.powerBallnum5 = Math.floor(Math.random() * 69) + 1;
        this.powerBallnum6POWERBALL = Math.floor(Math.random() * 26) + 1;
        this.powerBallGeneratedNumber1 = this.powerBallnum1;
        this.powerBallGeneratedNumber2 = this.powerBallnum2;
        this.powerBallGeneratedNumber3 = this.powerBallnum3;
        this.powerBallGeneratedNumber4 = this.powerBallnum4;
        this.powerBallGeneratedNumber5 = this.powerBallnum5;
        this.powerBallGeneratedNumber6POWERBALL = this.powerBallnum6POWERBALL;
        console.log(this.powerBallGeneratedNumber1, this.powerBallGeneratedNumber2, this.powerBallGeneratedNumber3, this.powerBallGeneratedNumber4, this.powerBallGeneratedNumber5, this.powerBallGeneratedNumber6POWERBALL);
    }
    // save number for pick5
    pick5_SaveNumber() {
        this.pick5SavedList.push(this.Pick5GeneratedNumber1, this.Pick5GeneratedNumber2, this.Pick5GeneratedNumber3, this.Pick5GeneratedNumber4, this.Pick5GeneratedNumber5);
        console.log(this.pick5SavedList);
    }
    randomPhraseGen() {
        this.phraseNumber = Math.floor(Math.random() * this.randomPhrase.length);
        console.log(this.phraseNumber);
        if (this.phraseNumber === 1) {
            this.Phrase = this.randomPhrase[0];
        }
        if (this.phraseNumber === 2) {
            this.Phrase = this.randomPhrase[1];
        }
        if (this.phraseNumber === 3) {
            this.Phrase = this.randomPhrase[2];
        }
        if (this.phraseNumber === 4) {
            this.Phrase = this.randomPhrase[3];
        }
        if (this.phraseNumber === 5) {
            this.Phrase = this.randomPhrase[4];
        }
        if (this.phraseNumber === 6) {
            this.Phrase = this.randomPhrase[5];
        }
        if (this.phraseNumber === 7) {
            this.Phrase = this.randomPhrase[6];
        }
        if (this.phraseNumber === 8) {
            this.Phrase = this.randomPhrase[7];
        }
        if (this.phraseNumber === 9) {
            this.Phrase = this.randomPhrase[8];
        }
        if (this.phraseNumber === 10) {
            this.Phrase = this.randomPhrase[9];
        }
        if (this.phraseNumber === 11) {
            this.Phrase = this.randomPhrase[10];
        }
        if (this.phraseNumber === 12) {
            this.Phrase = this.randomPhrase[11];
        }
        if (this.phraseNumber === 13) {
            this.Phrase = this.randomPhrase[12];
        }
        if (this.phraseNumber === 14) {
            this.Phrase = this.randomPhrase[13];
        }
        if (this.phraseNumber === 15) {
            this.Phrase = this.randomPhrase[14];
        }
        if (this.phraseNumber === 16) {
            this.Phrase = this.randomPhrase[15];
        }
    }
}
NumberGenService.ɵfac = function NumberGenService_Factory(t) { return new (t || NumberGenService)(); };
NumberGenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NumberGenService, factory: NumberGenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9590:
/*!****************************************************!*\
  !*** ./src/app/services/winningNumbers.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "winningNumbersServiceClass": () => (/* binding */ winningNumbersServiceClass)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/winning/FLpick2winners';
//Decorator that marks a class as available to be provided and injected as a dependency.
class winningNumbersServiceClass {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.winningFLPick2List = [];
        this.winningFLPick3List = [];
    }
    getPick2Winners() {
        return this.http.get(BACKEND_URL);
    }
}
winningNumbersServiceClass.ɵfac = function winningNumbersServiceClass_Factory(t) { return new (t || winningNumbersServiceClass)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
winningNumbersServiceClass.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: winningNumbersServiceClass, factory: winningNumbersServiceClass.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 528:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/florida-winning-numbers-game-pick.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloridaWinningNumbersGamePickComponent": () => (/* binding */ FloridaWinningNumbersGamePickComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class FloridaWinningNumbersGamePickComponent {
    constructor(theRouter) {
        this.theRouter = theRouter;
    }
    back() {
        this.theRouter.navigate(['/dashBoard']);
    }
    ngOnInit() {
    }
}
FloridaWinningNumbersGamePickComponent.ɵfac = function FloridaWinningNumbersGamePickComponent_Factory(t) { return new (t || FloridaWinningNumbersGamePickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FloridaWinningNumbersGamePickComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FloridaWinningNumbersGamePickComponent, selectors: [["app-florida-winning-numbers-game-pick"]], decls: 10, vars: 0, consts: [[1, "btn", "btn-outline-primary", 3, "click"], ["layout", "row", "layout-align", "center center", 2, "min-height", "500px"], ["href", "/FLPick2Winners"], ["src", "./assets/public/images/p2-game-pg-banner.jpg"], ["href", "/FLPick3Winners"], ["src", "./assets/public/images/p3-game-pg-banner.jpg"]], template: function FloridaWinningNumbersGamePickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FloridaWinningNumbersGamePickComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Florida Winning Number History Game Pick ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["#bird[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  height: 25;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb3JpZGEtd2lubmluZy1udW1iZXJzLWdhbWUtcGljay5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1F1YW50dW0lMjBBcHBsaWNhdGlvbnMvTG90dGVyeSUyMEdlbmllJTIwV2ViQXBwL2dlbmllLTUvTG90dGVyeS1HZW5pZS9zcmMvYXBwL3dpbm5pbmdOdW1iZXIvd2lubmluZy1ieS1zdGF0ZS9GbG9yaWRhL2ZsLXdpbm5pbmctbnVtYmVycy1nYW1lLXBpY2svZmxvcmlkYS13aW5uaW5nLW51bWJlcnMtZ2FtZS1waWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6ImZsb3JpZGEtd2lubmluZy1udW1iZXJzLWdhbWUtcGljay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiaXJkIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIGhlaWdodDogMjU7XG4gICAgd2lkdGg6IGF1dG87XG59IiwiI2JpcmQge1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBoZWlnaHQ6IDI1O1xuICB3aWR0aDogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 9405:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/pick2-winning-numbers/pick2-winning-numbers.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick2WinningNumbersComponent": () => (/* binding */ Pick2WinningNumbersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_winningNumbers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/winningNumbers.service */ 9590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function Pick2WinningNumbersComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const winningPick2_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", winningPick2_r2.drawDate, " - ", winningPick2_r2.winningNumber, "");
} }
function Pick2WinningNumbersComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const winningPick2_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", winningPick2_r3.drawDate, " - ", winningPick2_r3.winningNumber, "");
} }
class Pick2WinningNumbersComponent {
    // totalPosts = 0;
    // postsPerPage = 2;
    // currentPage = 1;
    // pageSizeOptions = [1, 2, 5, 10];
    constructor(router, WinningService) {
        this.router = router;
        this.WinningService = WinningService;
        this.isLoading = false;
        this.winningPick2Numbers = [];
        this.pick2MidDayWinnersDemoData = [
            { drawDate: 'Nov 17, 2020', winningNumber: '79', midDay: true, evening: false },
            { drawDate: 'Nov 16, 2020', winningNumber: '08', midDay: true, evening: false },
            { drawDate: 'Nov 15, 2020', winningNumber: '65', midDay: true, evening: false },
            { drawDate: 'Nov 14, 2020', winningNumber: '83', midDay: true, evening: false },
            { drawDate: 'Nov 13, 2020', winningNumber: '97', midDay: true, evening: false },
            { drawDate: 'Nov 12, 2020', winningNumber: '52', midDay: true, evening: false },
            { drawDate: 'Nov 11, 2020', winningNumber: '02', midDay: true, evening: false },
            { drawDate: 'Nov 10, 2020', winningNumber: '17', midDay: true, evening: false },
            { drawDate: 'Nov 09, 2020', winningNumber: '64', midDay: true, evening: false },
            { drawDate: 'Nov 08, 2020', winningNumber: '17', midDay: true, evening: false },
            { drawDate: 'Nov 07, 2020', winningNumber: '17', midDay: true, evening: false },
            { drawDate: 'Nov 06, 2020', winningNumber: '77', midDay: true, evening: false },
            { drawDate: 'Nov 05, 2020', winningNumber: '11', midDay: true, evening: false },
            { drawDate: 'Nov 04, 2020', winningNumber: '08', midDay: true, evening: false },
            { drawDate: 'Nov 03, 2020', winningNumber: '81', midDay: true, evening: false },
            { drawDate: 'Nov 02, 2020', winningNumber: '40', midDay: true, evening: false },
            { drawDate: 'Nov 01, 2020', winningNumber: '72', midDay: true, evening: false },
        ];
        this.pick2EveningWinnersDemoData = [
            // {drawDate: 'Nov 21, 2020', winningNumber:'08', midDay: false, evening: true},
            // {drawDate: 'Nov 20, 2020', winningNumber:'48', midDay: false, evening: true},
            // {drawDate: 'Nov 19, 2020', winningNumber:'89', midDay: false, evening: true},
            // {drawDate: 'Nov 18, 2020', winningNumber:'09', midDay: false, evening: true},
            { drawDate: 'Nov 17, 2020', winningNumber: '08', midDay: false, evening: true },
            { drawDate: 'Nov 16, 2020', winningNumber: '73', midDay: false, evening: true },
            { drawDate: 'Nov 15, 2020', winningNumber: '31', midDay: false, evening: true },
            { drawDate: 'Nov 14, 2020', winningNumber: '35', midDay: false, evening: true },
            { drawDate: 'Nov 13, 2020', winningNumber: '72', midDay: false, evening: true },
            { drawDate: 'Nov 12, 2020', winningNumber: '36', midDay: false, evening: true },
            { drawDate: 'Nov 11, 2020', winningNumber: '33', midDay: false, evening: true },
            { drawDate: 'Nov 10, 2020', winningNumber: '09', midDay: false, evening: true },
            { drawDate: 'Nov 09, 2020', winningNumber: '44', midDay: false, evening: true },
            { drawDate: 'Nov 08, 2020', winningNumber: '01', midDay: false, evening: true },
            { drawDate: 'Nov 07, 2020', winningNumber: '44', midDay: false, evening: true },
            { drawDate: 'Nov 06, 2020', winningNumber: '01', midDay: false, evening: true },
            { drawDate: 'Nov 05, 2020', winningNumber: '46', midDay: false, evening: true },
            { drawDate: 'Nov 04, 2020', winningNumber: '50', midDay: false, evening: true },
            { drawDate: 'Nov 03, 2020', winningNumber: '69', midDay: false, evening: true },
            { drawDate: 'Nov 02, 2020', winningNumber: '86', midDay: false, evening: true },
            { drawDate: 'Nov 01, 2020', winningNumber: '56', midDay: false, evening: true },
        ];
    }
    ngOnInit() {
        // this.WinningService.getPick2Winners()
    }
    back() {
        this.router.navigate(['/dashBoard']);
    }
}
Pick2WinningNumbersComponent.ɵfac = function Pick2WinningNumbersComponent_Factory(t) { return new (t || Pick2WinningNumbersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_winningNumbers_service__WEBPACK_IMPORTED_MODULE_0__.winningNumbersServiceClass)); };
Pick2WinningNumbersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Pick2WinningNumbersComponent, selectors: [["app-pick2-winning-numbers"]], decls: 23, vars: 2, consts: [[1, "btn", "btn-outline-primary", 3, "click"], ["id", "totalContainer", 1, "container"], [1, "row"], [1, "col"], [4, "ngFor", "ngForOf"]], template: function Pick2WinningNumbersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Pick2WinningNumbersComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " History of Pick-2 Winning Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "div", 3)(10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Mid Day Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Draw Date - Winning Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, Pick2WinningNumbersComponent_li_15_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Evening Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Draw Date - Winning Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, Pick2WinningNumbersComponent_li_22_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pick2MidDayWinnersDemoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pick2EveningWinnersDemoData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["#totalContainer[_ngcontent-%COMP%] {\n  background-color: #f5efef;\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2syLXdpbm5pbmctbnVtYmVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1F1YW50dW0lMjBBcHBsaWNhdGlvbnMvTG90dGVyeSUyMEdlbmllJTIwV2ViQXBwL2dlbmllLTUvTG90dGVyeS1HZW5pZS9zcmMvYXBwL3dpbm5pbmdOdW1iZXIvd2lubmluZy1ieS1zdGF0ZS9GbG9yaWRhL2ZsLXdpbm5pbmctbnVtYmVycy1nYW1lLXBpY2svcGljazItd2lubmluZy1udW1iZXJzL3BpY2syLXdpbm5pbmctbnVtYmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NBIiwiZmlsZSI6InBpY2syLXdpbm5pbmctbnVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3RhbENvbnRhaW5lcntcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOSwgMjM5KTtcbmJvcmRlcjogMXB4O1xuYm9yZGVyLXN0eWxlOiBzb2xpZDtcbmJvcmRlci1jb2xvcjogYmxhY2s7XG5wYWRkaW5nOiAxJTtcbm1hcmdpbjogMSU7XG5cbn1cbiIsIiN0b3RhbENvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVmZWY7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn0iXX0= */"] });


/***/ }),

/***/ 4090:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/winningNumber/winning-by-state/Florida/fl-winning-numbers-game-pick/pick3-winning-numbers/pick3-winning-number.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pick3WinningNumbersComponent": () => (/* binding */ Pick3WinningNumbersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_winningNumbers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/winningNumbers.service */ 9590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function Pick3WinningNumbersComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const winningPick3_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", winningPick3_r2.drawDate, " - ", winningPick3_r2.winningNumber, "");
} }
function Pick3WinningNumbersComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const winningPick3_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", winningPick3_r3.drawDate, " - ", winningPick3_r3.winningNumber, "");
} }
class Pick3WinningNumbersComponent {
    // totalPosts = 0;
    // postsPerPage = 2;
    // currentPage = 1;
    // pageSizeOptions = [1, 2, 5, 10];
    constructor(router, WinningService) {
        this.router = router;
        this.WinningService = WinningService;
        this.isLoading = false;
        this.winningPick3Numbers = [];
        this.pick3MidDayWinnersDemoData = [
            { drawDate: 'Nov 22, 2020', winningNumber: '501', midDay: true, evening: false },
            { drawDate: 'Nov 21, 2020', winningNumber: '814', midDay: true, evening: false },
            { drawDate: 'Nov 20, 2020', winningNumber: '549', midDay: true, evening: false },
            { drawDate: 'Nov 19, 2020', winningNumber: '303', midDay: true, evening: false },
            { drawDate: 'Nov 18, 2020', winningNumber: '913', midDay: true, evening: false },
            { drawDate: 'Nov 17, 2020', winningNumber: '922', midDay: true, evening: false },
            { drawDate: 'Nov 16, 2020', winningNumber: '741', midDay: true, evening: false },
            { drawDate: 'Nov 15, 2020', winningNumber: '698', midDay: true, evening: false },
            { drawDate: 'Nov 14, 2020', winningNumber: '899', midDay: true, evening: false },
            { drawDate: 'Nov 13, 2020', winningNumber: '363', midDay: true, evening: false },
            { drawDate: 'Nov 12, 2020', winningNumber: '412', midDay: true, evening: false },
            { drawDate: 'Nov 11, 2020', winningNumber: '429', midDay: true, evening: false },
            { drawDate: 'Nov 10, 2020', winningNumber: '521', midDay: true, evening: false },
            { drawDate: 'Nov 09, 2020', winningNumber: '340', midDay: true, evening: false },
        ];
        this.pick3EveningWinnersDemoData = [
            { drawDate: 'Nov 22, 2020', winningNumber: '785', midDay: false, evening: true },
            { drawDate: 'Nov 21, 2020', winningNumber: '351', midDay: false, evening: true },
            { drawDate: 'Nov 20, 2020', winningNumber: '421', midDay: false, evening: true },
            { drawDate: 'Nov 19, 2020', winningNumber: '106', midDay: false, evening: true },
            { drawDate: 'Nov 18, 2020', winningNumber: '073', midDay: false, evening: true },
            { drawDate: 'Nov 17, 2020', winningNumber: '874', midDay: false, evening: true },
            { drawDate: 'Nov 16, 2020', winningNumber: '206', midDay: false, evening: true },
            { drawDate: 'Nov 15, 2020', winningNumber: '541', midDay: false, evening: true },
            { drawDate: 'Nov 14, 2020', winningNumber: '268', midDay: false, evening: true },
            { drawDate: 'Nov 13, 2020', winningNumber: '210', midDay: false, evening: true },
            { drawDate: 'Nov 12, 2020', winningNumber: '460', midDay: false, evening: true },
            { drawDate: 'Nov 11, 2020', winningNumber: '110', midDay: false, evening: true },
            { drawDate: 'Nov 10, 2020', winningNumber: '043', midDay: false, evening: true },
            { drawDate: 'Nov 09, 2020', winningNumber: '537', midDay: false, evening: true },
        ];
    }
    ngOnInit() {
        // this.WinningService.getPick3Winners()
    }
    back() {
        this.router.navigate(['/dashBoard']);
    }
}
Pick3WinningNumbersComponent.ɵfac = function Pick3WinningNumbersComponent_Factory(t) { return new (t || Pick3WinningNumbersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_winningNumbers_service__WEBPACK_IMPORTED_MODULE_0__.winningNumbersServiceClass)); };
Pick3WinningNumbersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Pick3WinningNumbersComponent, selectors: [["app-pick3-winning-numbers"]], decls: 23, vars: 2, consts: [[1, "btn", "btn-outline-primary", 3, "click"], ["id", "totalContainer", 1, "container"], [1, "row"], [1, "col"], [4, "ngFor", "ngForOf"]], template: function Pick3WinningNumbersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Pick3WinningNumbersComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " History of Pick-3 Winning Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "div", 3)(10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Mid Day Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Draw Date - Winning Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, Pick3WinningNumbersComponent_li_15_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Evening Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Draw Date - Winning Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, Pick3WinningNumbersComponent_li_22_Template, 2, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pick3MidDayWinnersDemoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pick3EveningWinnersDemoData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["#totalContainer[_ngcontent-%COMP%] {\n  background-color: #f5efef;\n  border: 1px;\n  border-style: solid;\n  border-color: black;\n  padding: 1%;\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2szLXdpbm5pbmctbnVtYmVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1F1YW50dW0lMjBBcHBsaWNhdGlvbnMvTG90dGVyeSUyMEdlbmllJTIwV2ViQXBwL2dlbmllLTUvTG90dGVyeS1HZW5pZS9zcmMvYXBwL3dpbm5pbmdOdW1iZXIvd2lubmluZy1ieS1zdGF0ZS9GbG9yaWRhL2ZsLXdpbm5pbmctbnVtYmVycy1nYW1lLXBpY2svcGljazMtd2lubmluZy1udW1iZXJzL3BpY2szLXdpbm5pbmctbnVtYmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InBpY2szLXdpbm5pbmctbnVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3RhbENvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzksIDIzOSk7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIG1hcmdpbjogMSU7XG4gICAgXG4gICAgfVxuICAgICIsIiN0b3RhbENvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVmZWY7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn0iXX0= */"] });


/***/ }),

/***/ 1641:
/*!****************************************************************************************************************!*\
  !*** ./src/app/winningNumber/winning-numbers-main-page/winning-numbers-main/winning-numbers-main.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinningNumbersMainComponent": () => (/* binding */ WinningNumbersMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class WinningNumbersMainComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/dashBoard']);
    }
}
WinningNumbersMainComponent.ɵfac = function WinningNumbersMainComponent_Factory(t) { return new (t || WinningNumbersMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
WinningNumbersMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinningNumbersMainComponent, selectors: [["app-winning-numbers-main"]], decls: 17, vars: 0, consts: [[1, "btn", "btn-outline-primary", 3, "click"], ["id", "state", "flex", "50", "layout-align", "center", 1, "pagination", "justify-content-center"], ["id", "list", "flex", "50", "layout-align", "center", 1, "pagination", "justify-content-center"], ["href", "/winningNumbersGamePick"]], template: function WinningNumbersMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WinningNumbersMainComponent_Template_button_click_0_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Winning Numbers Archives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pick a state and game for which games you'd like to see the winning numbers for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br")(9, "br")(10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "ol")(13, "h3")(14, "li")(15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Florida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aW5uaW5nLW51bWJlcnMtbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map