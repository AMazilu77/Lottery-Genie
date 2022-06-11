export interface WinningPick2NumberModel {
    id: string;
    drawDate: Date;
    winningNumber: string;
    midDay: boolean;
    evening: boolean;
  }
  
  export interface WinningPick3NumberModel {
    id: string;
    drawDate: Date;
    winningNumber: string;
    midDay: boolean;
    evening: boolean;
  }


  export interface WinningMegaMellionsNumbersModel {
    id: string;
    drawDate: Date;
    winningNumber: string;
    multiplier: string;
  }

  export interface WinningPowerballNumbersModel {
    id: string;
    drawDate: Date;
    winningNumber1: number;
    winningNumber2: number;
    winningNumber3: number;
    winningNumber4: number;
    winningNumber5: number;
    winningNumber6: number;
    multiplier: number;
    powerBall: number
  }