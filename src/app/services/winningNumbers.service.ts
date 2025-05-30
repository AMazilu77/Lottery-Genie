import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { CashForLifeModel, Fantasy5Model, FLJackpotModel, FloridaLottoModel, WinningMegaMellionsNumbersModel, WinningPick2NumberModel, WinningPick4NumberModel, WinningPick5NumberModel, WinningPowerballNumbersModel } from '../winningNumber/winningNumber.model';
import { WinningPick3NumberModel } from '../winningNumber/winningNumber.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';


const BACKEND_URL_PICK2 = environment.apiUrl + '/winning/FLpick2winners';
const BACKEND_URL_PICK3 = environment.apiUrl + '/winning/FLpick3winners';

//Decorator that marks a class as available to be provided and injected as a dependency. This is the Winning Number Service class
@Injectable({ providedIn: 'root' })
export class winningNumbersServiceClass {
private winningFLPick2List: WinningPick2NumberModel[] = [];
private winningFLPick3List: WinningPick3NumberModel[] = [];

constructor(private http: HttpClient, private router: Router) {}

ngOnInit() {
    this.http.get(`${environment.apiUrl}/winning/FLPick3`).subscribe(
      data => console.log('🎯 Received FLPick3 data:', data),
      err => console.error('❌ API call failed:', err)
    );
  }

    getPick2Winners(){
        return this.http.get(BACKEND_URL_PICK2).pipe(
        tap(data => console.log('💡 Raw pick2 response:', data))
    )}

    getPick3Winners() {
        return this.http.get(BACKEND_URL_PICK3).pipe(
            tap(data => console.log('raw pick3 responses', data))
        );
    }
    getPick4Results(): Observable<WinningPick4NumberModel[]> {
        return this.http.get<WinningPick4NumberModel[]>(
        `${environment.apiUrl}/winning/pick4`
  );
}

getPick5Results(): Observable<WinningPick5NumberModel[]> {
  return this.http.get<WinningPick5NumberModel[]>(
    `${environment.apiUrl}/winning/pick5`
  );
}

getFloridaLottoResults(): Observable<FloridaLottoModel[]> {
  return this.http.get<FloridaLottoModel[]>(
    `${environment.apiUrl}/winning/florida-lotto`
  );
}
getFantasy5Results(): Observable<Fantasy5Model[]> {
  return this.http.get<Fantasy5Model[]>(
    `${environment.apiUrl}/winning/fantasy5`
  );
}
getJackpotTriplePlayResults(): Observable<FLJackpotModel[]> {
  return this.http.get<FLJackpotModel[]>(
    `${environment.apiUrl}/winning/fantasy5`
  );
}


getCashForLifeResults(): Observable<CashForLifeModel[]> {
  return this.http.get<CashForLifeModel[]>(
    `${environment.apiUrl}/winning/cash-for-life`
  );
}



    getMegaMillionsResults(): Observable<WinningMegaMellionsNumbersModel[]> {
    return this.http.get<WinningMegaMellionsNumbersModel[]>(
    `${environment.apiUrl}/winning/megamillions`
  );
}

   getPowerballResults(): Observable<WinningPowerballNumbersModel[]> {
    return this.http.get<WinningPowerballNumbersModel[]>(
    `${environment.apiUrl}/winning/powerball`
  );
}

 }