import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';


@Injectable({ providedIn: "root"})
export class AuthService {
    private isAuthenticated = false;
    // this subject will push authentication information to the components interested
    private authStatusListening = new Subject<boolean>();
    private token: string;
    private tokenTimer: any;
    private userId: string;
    constructor(private http: HttpClient, private router: Router) {}

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

    createUser(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post("http://localhost:3000/api/user/signup", authData)
        .subscribe(response => {
            console.log(response);
        });
    }
    
    login(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post<{token: string, expiresIn: number, userId: string; }>("http://localhost:3000/api/user/login", authData)
        .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                const now = new Date();
                const expirationDate = new Date( now.getTime() + expiresInDuration * 1000 )
                console.log(expirationDate)
                this.saveAuthData(token, expirationDate, this.userId)
                this.authStatusListening.next(true);
               // this.router.navigate(['/dashBoard']);
            }
        });
    }



    autoAuthUser(){
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
        this.authStatusListening.next(false)
        this.router.navigate(['/']);
        this.userId = null;
        this.clearAuthData();
        clearTimeout(this.tokenTimer)
    }

    private setAuthTimer(duration: number) {
        console.log('setting timer: ' + duration)
               this.tokenTimer = setTimeout(() => {
            this.logout()
        }, duration * 1000);
    }

    // store data to local storange so you dont have to log in every time the page refreshes
    private saveAuthData(token: string, expirationDate: Date, userId: string) {
        localStorage.setItem('token', token),
        localStorage.setItem('expiration', expirationDate.toISOString())
        localStorage.setItem('userId', userId);
    }

    private clearAuthData() {
        localStorage.removeItem('token'),
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
    }

    private getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId')
        if (!token && !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        }
    }
} 