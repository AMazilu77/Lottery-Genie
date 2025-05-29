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
    fireball: {type: String, required: true}
    midDay: boolean;
    evening: boolean;
  }
  export interface WinningPick4NumberModel {
    id: string;
    drawDate: Date;
    winningNumber: string;
    fireball: {type: String, required: true}
    midDay: boolean;
    evening: boolean;
  }

  export interface WinningPick5NumberModel {
  drawDate: string;
  winningNumber: string;
  fireball: string;
  midDay: boolean;
  evening: boolean;
}

export interface FloridaLottoModel {
  drawDate: string;
  numbers: number[];
  gameType: string;
}

export interface Fantasy5Model {
  drawDate: string;
  drawType: 'MIDDAY' | 'EVENING';
  numbers: number[];
}


export interface CashForLifeModel {
  drawDate: string;
  numbers: number[];
  cashBall: number;
}

  export interface WinningMegaMellionsNumbersModel {
    _id?: string;
    drawDate: Date | string;
    numbers: number[];
    megaBall: number;
    multiplier?: string;
    implementationYear?: number;
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
    powerBall: number;
    multiplier: number | null;
    gameVersion: string;

  }