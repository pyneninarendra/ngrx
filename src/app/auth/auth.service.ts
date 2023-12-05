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

    formatData(info: AuthResponse) {
        let expireDate = new Date(new Date().getTime() + +info.expiresIn * 1000)
        return new User(info.idToken, info.email, info.localId, expireDate)
    }
}