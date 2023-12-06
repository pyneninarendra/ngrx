import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authstate } from '../store/auth.store';
import { Store } from '@ngrx/store';
import { loginStart } from '../store/auth.actions';
import { updateStatus } from 'src/app/shared/store/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm: FormGroup
  constructor(private store: Store<authstate>) { }

  ngOnInit(): void {
    this.loginFrm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  verifyUser() {
    this.store.dispatch(updateStatus({status: true}))
    let email = this.loginFrm.value.email
    let password = this.loginFrm.value.password
    this.store.dispatch(loginStart({ email, password }))
  }
}
