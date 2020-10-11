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

    createUser(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post("http://localhost:3000/api/user/signup", authData)
        .subscribe(response => {
            console.log(response);
        });
    }
    
    login(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
        .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                this.isAuthenticated = true;
                this.authStatusListening.next(true);
               // this.router.navigate(['/dashBoard']);
            }
        });
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        // pass information
        this.authStatusListening.next(false)
        this.router.navigate(['/']);
    }
}