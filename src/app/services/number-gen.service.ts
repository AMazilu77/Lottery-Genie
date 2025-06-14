import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberGenService {

  // where the random phrases that the genie says are generated
  phraseNumber;
  Phrase;


  // pick2 variables declared
  pick2num1;
  pick2num2;
  Pick2GeneratedNumber1;
  Pick2GeneratedNumber2;

  // pick3 variables declared
  pick3num1;
  pick3num2;
  pick3num3;
  Pick3GeneratedNumber1;
  Pick3GeneratedNumber2;
  Pick3GeneratedNumber3;

  // pick 4 variables declared
  pick4num1;
  pick4num2;
  pick4num3;
  pick4num4;
  Pick4GeneratedNumber1;
  Pick4GeneratedNumber2;
  Pick4GeneratedNumber3;
  Pick4GeneratedNumber4;

  // pick 5 variables declared
  pick5num1;
  pick5num2;
  pick5num3;
  pick5num4;
  pick5num5;
  Pick5GeneratedNumber1;
  Pick5GeneratedNumber2;
  Pick5GeneratedNumber3;
  Pick5GeneratedNumber4;
  Pick5GeneratedNumber5;

  // Lucky Number variables declared
  luckyMoneynum1;
  luckyMoneynum2;
  luckyMoneynum3;
  luckyMoneynum4;
  luckyMoneyLuckyBall;
  luckyMoneyGeneratedNumber1;
  luckyMoneyGeneratedNumber2;
  luckyMoneyGeneratedNumber3;
  luckyMoneyGeneratedNumber4;
  luckyMoneyGeneratedLuckyBall;

  // Fantasy 5 declared variables

  fantasy5num1;
  fantasy5num2;
  fantasy5num3;
  fantasy5num4;
  fantasy5num5;

  fantasy5GeneratedNumber1;
  fantasy5GeneratedNumber2;
  fantasy5GeneratedNumber3;
  fantasy5GeneratedNumber4;
  fantasy5GeneratedNumber5;

  // Cash for life declare variables
  cashForLifenum1;
  cashForLifenum2;
  cashForLifenum3;
  cashForLifenum4;
  cashForLifenum5;
  cashForLifeCashBall;

  cashForLifeGeneratedNumber1;
  cashForLifeGeneratedNumber2;
  cashForLifeGeneratedNumber3;
  cashForLifeGeneratedNumber4;
  cashForLifeGeneratedNumber5;
  cashForLifeGeneratedCashBall;

  FL_Lottonum1;
  FL_Lottonum2;
  FL_Lottonum3;
  FL_Lottonum4;
  FL_Lottonum5;
  FL_Lottonum6;

  FL_LottoGeneratedNumber1;
  FL_LottoGeneratedNumber2;
  FL_LottoGeneratedNumber3;
  FL_LottoGeneratedNumber4;
  FL_LottoGeneratedNumber5;
  FL_LottoGeneratedNumber6;

  // mega millions specific game number generators
  megaMillionsnum1;
  megaMillionsnum2;
  megaMillionsnum3;
  megaMillionsnum4;
  megaMillionsnum5;
  megaMillionsMEGABALL;

  megaMillionsGeneratedNumber1;
  megaMillionsGeneratedNumber2;
  megaMillionsGeneratedNumber3;
  megaMillionsGeneratedNumber4;
  megaMillionsGeneratedNumber5;
  megaMillionsGeneratedMEGABALL;

  // Powerball variables declared
  powerBallnum1;
  powerBallnum2;
  powerBallnum3;
  powerBallnum4;
  powerBallnum5;
  powerBallnum6POWERBALL;

  powerBallGeneratedNumber1;
  powerBallGeneratedNumber2;
  powerBallGeneratedNumber3;
  powerBallGeneratedNumber4;
  powerBallGeneratedNumber5;
  powerBallGeneratedNumber6POWERBALL;

// jackpot tripple play service
jackpotNum1;
jackpotNum2;
jackpotNum3;
jackpotNum4;
jackpotNum5;
jackpotNum6;

jackpotGeneratedNumber1;
jackpotGeneratedNumber2;
jackpotGeneratedNumber3;
jackpotGeneratedNumber4;
jackpotGeneratedNumber5;
jackpotGeneratedNumber6;

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

    console.log(
      this.Pick5GeneratedNumber1,
      this.Pick5GeneratedNumber2,
      this.Pick5GeneratedNumber3,
      this.Pick5GeneratedNumber4,
      this.Pick5GeneratedNumber5);
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

    console.log(
      this.fantasy5GeneratedNumber1,
      this.fantasy5GeneratedNumber2,
      this.fantasy5GeneratedNumber3,
      this.fantasy5GeneratedNumber4,
      this.fantasy5GeneratedNumber5);
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

    console.log(
      this.cashForLifeGeneratedNumber1,
      this.cashForLifeGeneratedNumber2,
      this.cashForLifeGeneratedNumber3,
      this.cashForLifeGeneratedNumber4,
      this.cashForLifeGeneratedCashBall);
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

    console.log(
      this.FL_LottoGeneratedNumber1,
      this.FL_LottoGeneratedNumber2,
      this.FL_LottoGeneratedNumber3,
      this.FL_LottoGeneratedNumber4,
      this.FL_LottoGeneratedNumber5,
      this.FL_LottoGeneratedNumber6);
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

    console.log(
      this.megaMillionsGeneratedNumber1,
      this.megaMillionsGeneratedNumber2,
      this.megaMillionsGeneratedNumber3,
      this.megaMillionsGeneratedNumber4,
      this.megaMillionsGeneratedNumber5,
      this.megaMillionsGeneratedMEGABALL);
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

    console.log(
      this.powerBallGeneratedNumber1,
      this.powerBallGeneratedNumber2,
      this.powerBallGeneratedNumber3,
      this.powerBallGeneratedNumber4,
      this.powerBallGeneratedNumber5,
      this.powerBallGeneratedNumber6POWERBALL);
  }

  jackpotTriplePlayRandomGenMaster() {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < 6) {
    uniqueNumbers.add(Math.floor(Math.random() * 46) + 1);
  }
  const sorted = Array.from(uniqueNumbers).sort((a, b) => a - b);

  this.jackpotNum1 = sorted[0];
  this.jackpotNum2 = sorted[1];
  this.jackpotNum3 = sorted[2];
  this.jackpotNum4 = sorted[3];
  this.jackpotNum5 = sorted[4];
  this.jackpotNum6 = sorted[5];

  this.jackpotGeneratedNumber1 = this.jackpotNum1;
  this.jackpotGeneratedNumber2 = this.jackpotNum2;
  this.jackpotGeneratedNumber3 = this.jackpotNum3;
  this.jackpotGeneratedNumber4 = this.jackpotNum4;
  this.jackpotGeneratedNumber5 = this.jackpotNum5;
  this.jackpotGeneratedNumber6 = this.jackpotNum6;

  console.log(
    this.jackpotGeneratedNumber1,
    this.jackpotGeneratedNumber2,
    this.jackpotGeneratedNumber3,
    this.jackpotGeneratedNumber4,
    this.jackpotGeneratedNumber5,
    this.jackpotGeneratedNumber6
  );
}



  // save number for pick5
  pick5_SaveNumber() {

    this.pick5SavedList.push(
      this.Pick5GeneratedNumber1,
      this.Pick5GeneratedNumber2,
      this.Pick5GeneratedNumber3,
      this.Pick5GeneratedNumber4,
      this.Pick5GeneratedNumber5);
    console.log(this.pick5SavedList);

  }

  // Random phrase generator
  randomPhrase = ['I believe this number has a strong chance of winning', '',
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

  randomPhraseGen() {
    this.phraseNumber = Math.floor(Math.random() * this.randomPhrase.length);
    console.log(this.phraseNumber);
    if (this.phraseNumber === 1) { this.Phrase = this.randomPhrase[0]; }
    if (this.phraseNumber === 2) { this.Phrase = this.randomPhrase[1]; }
    if (this.phraseNumber === 3) { this.Phrase = this.randomPhrase[2]; }
    if (this.phraseNumber === 4) { this.Phrase = this.randomPhrase[3]; }
    if (this.phraseNumber === 5) { this.Phrase = this.randomPhrase[4]; }
    if (this.phraseNumber === 6) { this.Phrase = this.randomPhrase[5]; }
    if (this.phraseNumber === 7) { this.Phrase = this.randomPhrase[6]; }
    if (this.phraseNumber === 8) { this.Phrase = this.randomPhrase[7]; }
    if (this.phraseNumber === 9) { this.Phrase = this.randomPhrase[8]; }
    if (this.phraseNumber === 10) { this.Phrase = this.randomPhrase[9]; }
    if (this.phraseNumber === 11) { this.Phrase = this.randomPhrase[10]; }
    if (this.phraseNumber === 12) { this.Phrase = this.randomPhrase[11]; }
    if (this.phraseNumber === 13) { this.Phrase = this.randomPhrase[12]; }
    if (this.phraseNumber === 14) { this.Phrase = this.randomPhrase[13]; }
    if (this.phraseNumber === 15) { this.Phrase = this.randomPhrase[14]; }
    if (this.phraseNumber === 16) { this.Phrase = this.randomPhrase[15]; }
  }


// ─────────────────────────────────────────────
// 💾 LOCAL SAVED NUMBER LISTS FOR EACH GAME
// ─────────────────────────────────────────────

pick2SavedList: number[][] = [];
pick3SavedList: number[][] = [];
pick4SavedList: number[][] = [];
pick5SavedList: number[][] = [];
luckyMoneySavedList: number[][] = [];
fantasy5SavedList: number[][] = [];
cashForLifeSavedList: number[][] = [];
flLottoSavedList: number[][] = [];
megaMillionsSavedList: number[][] = [];
powerBallSavedList: number[][] = [];
jackpotTriplePlaySavedList: number[][] = [];

private readonly maxSaves = 10;

saveNumber(game: string, numberSet: number[]): boolean {
  const list = this.getListByGame(game);
  if (list.length >= this.maxSaves) return false;
  list.push([...numberSet]); // shallow copy to prevent reference issues
  return true;
}

getSavedNumbers(game: string): number[][] {
  return this.getListByGame(game);
}

clearSavedNumbers(game: string) {
  const list = this.getListByGame(game);
  list.length = 0;
}

removeSavedNumber(game: string, index: number) {
  const list = this.getListByGame(game);
  if (index >= 0 && index < list.length) {
    list.splice(index, 1);
  }
}

private getListByGame(game: string): number[][] {
  switch (game) {
    case 'pick2': return this.pick2SavedList;
    case 'pick3': return this.pick3SavedList;
    case 'pick4': return this.pick4SavedList;
    case 'pick5': return this.pick5SavedList;
    case 'luckymoney': return this.luckyMoneySavedList;
    case 'fantasy5': return this.fantasy5SavedList;
    case 'cash4life': return this.cashForLifeSavedList;
    case 'fllotto': return this.flLottoSavedList;
    case 'megamillions': return this.megaMillionsSavedList;
    case 'powerball': return this.powerBallSavedList;
    case 'jackpot': return this.jackpotTriplePlaySavedList;
    default: throw new Error(`Unknown game type: ${game}`);
  }
}


}
