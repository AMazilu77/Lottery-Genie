import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { WinningPick2NumberModel } from '../winningNumber/winningNumber.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const BACKEND_URL = environment.apiURL + '/winning/FLpick2winners'

//Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({ providedIn: 'root' })
export class winningNumbersServiceClass {
private winningFLPick2List: WinningPick2NumberModel[] = [];
constructor(private http: HttpClient, private router: Router) {}

    getPick2Winners() {
    return this.http.get<{ drawDate: string; winingNumber: string, midDay: boolean, evening: boolean }>(
        BACKEND_URL
    )}

}