"use strict";(self.webpackChunkThe_Lottery_Djinni=self.webpackChunkThe_Lottery_Djinni||[]).push([[137],{2137:(P,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>S});var u=a(9808),h=a(4786),e=a(2382),m=a(6609),t=a(4893),g=a(384),p=a(9224),d=a(7423),f=a(773),s=a(7322),_=a(7531);function C(n,r){1&n&&t._UZ(0,"mat-spinner")}function Z(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email. "),t.qZA())}function v(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter correct password. "),t.qZA())}function M(n,r){if(1&n){const o=t.EpF();t.TgZ(0,"form",4,5),t.NdJ("submit",function(){t.CHM(o);const l=t.MAs(1);return t.oxw().onLogin(l)}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",6,7),t.YNc(5,Z,2,0,"mat-error",1),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",8,9),t.YNc(9,v,2,0,"mat-error",1),t.qZA(),t.TgZ(10,"button",10),t._uU(11," Login "),t.qZA(),t.TgZ(12,"button",11),t._uU(13," Register New Account "),t.qZA()()}if(2&n){const o=t.MAs(4),i=t.MAs(8);t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",i.invalid)}}function A(n,r){1&n&&t._UZ(0,"mat-spinner")}function b(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email. "),t.qZA())}function y(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password. "),t.qZA())}function O(n,r){if(1&n){const o=t.EpF();t.TgZ(0,"form",4,5),t.NdJ("submit",function(){t.CHM(o);const l=t.MAs(1);return t.oxw().onSignup(l)}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",6,7),t.YNc(5,b,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",8,9),t.YNc(9,y,2,0,"mat-error",0),t.qZA(),t.TgZ(10,"button",10),t._uU(11," Signup "),t.qZA()()}if(2&n){const o=t.MAs(4),i=t.MAs(8);t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",i.invalid)}}const I=[{path:"login",component:(()=>{class n{constructor(o,i){this.router=o,this.authService=i,this.isLoading=!1}onLogin(o){o.invalid||(this.authService.login(o.value.email,o.value.password),console.log("logged in"),this.router.navigate(["/dashBoard"]))}back(){this.router.navigate(["/dashBoard"])}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(m.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:6,vars:2,consts:[["mat-button","","color","primary","type","submit",3,"click"],[4,"ngIf"],["class","log",3,"submit",4,"ngIf"],["src","../../../assets/public/images/lamplogo.png"],[1,"log",3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-mail","color","","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-button","","color","primary","type","submit"],["mat-button","","color","primary","routerLink","/auth/signup"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-card")(1,"button",0),t.NdJ("click",function(){return i.back()}),t._uU(2," Back "),t.qZA(),t.YNc(3,C,1,0,"mat-spinner",1),t.YNc(4,M,14,2,"form",2),t.qZA(),t._UZ(5,"img",3)),2&o&&(t.xp6(3),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading))},directives:[p.a8,d.lW,u.O5,f.Ou,e._Y,e.JL,e.F,s.KE,_.Nt,e.Fj,e.JJ,e.On,e.Q7,e.on,s.TO,m.rH],styles:["mat-card[_ngcontent-%COMP%]{width:80%;margin:auto;margin-top:2rem;background-color:#e1e9ff}mat-form-field[_ngcontent-%COMP%], text-area[_ngcontent-%COMP%]{width:100%;color:#dc0b0b}.log[_ngcontent-%COMP%]{color:#1d1c1d}input[_ngcontent-%COMP%]{color:#e9217e}img[_ngcontent-%COMP%]{height:20%;width:auto;margin-left:25%}mat-form-field[_ngcontent-%COMP%]{color:pink}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(o,i){this.authService=o,this.router=i,this.isLoading=!1}onSignup(o){o.invalid||this.authService.createUser(o.value.email,o.value.password)}back(){this.router.navigate(["/dashBoard"])}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.e),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:6,vars:2,consts:[[4,"ngIf"],["mat-button","","color","primary","type","submit",3,"click"],["class","log",3,"submit",4,"ngIf"],["src","../../../assets/public/images/lamplogo.png"],[1,"log",3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-button","","color","primary","type","submit"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,A,1,0,"mat-spinner",0),t.TgZ(2,"button",1),t.NdJ("click",function(){return i.back()}),t._uU(3," Back "),t.qZA(),t.YNc(4,O,12,2,"form",2),t.qZA(),t._UZ(5,"img",3)),2&o&&(t.xp6(1),t.Q6J("ngIf",i.isLoading),t.xp6(3),t.Q6J("ngIf",!i.isLoading))},directives:[p.a8,u.O5,f.Ou,d.lW,e._Y,e.JL,e.F,s.KE,_.Nt,e.Fj,e.JJ,e.On,e.Q7,e.on,s.TO],styles:["mat-card[_ngcontent-%COMP%]{width:80%;margin:auto;margin-top:2rem;background-color:#e1e9ff}mat-form-field[_ngcontent-%COMP%], text-area[_ngcontent-%COMP%]{width:100%;color:#467444}.log[_ngcontent-%COMP%]{color:#1d1c1d}input[_ngcontent-%COMP%]{color:#fff}img[_ngcontent-%COMP%]{height:20%;width:auto;margin-left:25%}"]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(I)],m.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.h,u.ez,e.u5,m.Bz,J]]}),n})()}}]);