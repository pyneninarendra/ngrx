import { AuthService } from "../auth.service";
import { map, mergeMap } from "rxjs";
import { loginStart, loginSuccess } from "./auth.actions";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { spinnerState } from "src/app/spinner/store/spinner.state";
import { Store } from "@ngrx/store";
import { updateStatus } from "src/app/spinner/store/spinner.action";

@Injectable()
export class AuthEffect {
    constructor(private actions$: Actions, private authSrv: AuthService, private store: Store<spinnerState>) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action:any)=> {
                return this.authSrv
                .login(action.email, action.password)
                .pipe(
                    map((data)=> {
                        let user = this.authSrv.formatData(data)
                        this.store.dispatch(updateStatus({status: false}))
                        return loginSuccess({user});
                    })
                )
            })
        )
    })
}