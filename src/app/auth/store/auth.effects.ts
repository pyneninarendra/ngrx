import { AuthService } from "../auth.service";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { setErrorMsg, updateStatus } from "src/app/shared/store/shared.action";
import { sharedState } from "src/app/shared/store/shared.state";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {
    constructor(private actions$: Actions, private authSrv: AuthService, private store: Store<sharedState>, private router: Router) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action: any) => {
                return this.authSrv
                    .login(action.email, action.password)
                    .pipe(
                        map((data) => {
                            let user = this.authSrv.formatData(data)
                            this.store.dispatch(updateStatus({ status: false }))
                            this.store.dispatch(setErrorMsg({ errorMsg: '' }))
                            return loginSuccess({ user });
                        }),
                        catchError((error) => {
                            let msg = this.authSrv.formatErrorMessage(error.error.error.message)
                            this.store.dispatch(updateStatus({ status: false }))
                            return of(setErrorMsg({ errorMsg: msg }))
                        })
                    )
            })
        )
    })

    loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/', 'home'])
            })
        )
    }, { dispatch: false })

    signup$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            mergeMap((action) => {
                return this.authSrv.signup(action.email, action.password).pipe(
                    map((res) => {
                        let user = this.authSrv.formatData(res)
                        this.store.dispatch(updateStatus({ status: false }))
                        this.store.dispatch(setErrorMsg({ errorMsg: '' }))
                        return signupSuccess({ user })
                    }),
                    catchError((error) => {
                        let msg = this.authSrv.formatErrorMessage(error.error.error.message)
                        this.store.dispatch(updateStatus({ status: false }))
                        return of(setErrorMsg({ errorMsg: msg }))
                    })
                )
            })
        )
    })

    signupSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupSuccess),
            tap((action) => {
                this.router.navigate(['/', 'auth'])
            })
        )
    }, {
        dispatch: false
    })
}