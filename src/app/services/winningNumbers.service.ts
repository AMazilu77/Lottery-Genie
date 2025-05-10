import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { WinningPick2NumberModel } from '../winningNumber/winningNumber.model';
import { WinningPick3NumberModel } from '../winningNumber/winningNumber.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const BACKEND_URL_PICK2 = environment.apiURL + '/winning/FLpick2winners';
const BACKEND_URL_PICK3 = environment.apiURL + '/winning/FLpick3winners';

//Decorator that marks a class as available to be provided and injected as a dependency. This is the Winning Number Service class
@Injectable({ providedIn: 'root' })
export class winningNumbersServiceClass {
private winningFLPick2List: WinningPick2NumberModel[] = [];
private winningFLPick3List: WinningPick3NumberModel[] = [];

constructor(private http: HttpClient, private router: Router) {}

    getPick2Winners() {
        return this.http.get<WinningPick2NumberModel[]>(BACKEND_URL_PICK2) 
    }

    getPick3Winners() {
        return this.http.get<WinningPick3NumberModel[]>(BACKEND_URL_PICK3);
    }
 }