import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AuthResponse } from "./authResponse";
import { environment } from "environments/environment";
import { User } from "./user";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`, { email, password, returnSecureToken: true })
    }

    signup(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`, { email, password, returnSecureToken: true })
    }

    formatData(info: AuthResponse) {
        let expireDate = new Date(new Date().getTime() + +info.expiresIn * 1000)
        return new User(info.idToken, info.email, info.localId, expireDate)
    }

    formatErrorMessage(msg: string) {
        switch (msg) {
            case 'EMAIL_NOT_FOUND':
                return 'There is no user record corresponding to this identifier. The user may have been deleted.'
            case 'INVALID_PASSWORD':
                return 'The password is invalid or the user does not have a password'
            case 'USER_DISABLED':
                return 'The user account has been disabled by an administrator'
            case 'INVALID_LOGIN_CREDENTIALS':
                return 'Invalid login credentials'
            case 'EMAIL_EXISTS':
                return 'The email address is already in use by another account'
            case 'OPERATION_NOT_ALLOWED':
                return 'Password sign-in is disabled for this project'
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                return 'We have blocked all requests from this device due to unusual activity, Try again later'
            default:
                return 'Unknown Error'
        }
    }
}