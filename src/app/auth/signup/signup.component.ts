import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authstate } from '../store/auth.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updateStatus } from 'src/app/shared/store/shared.action';
import { signupStart } from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupFrm: FormGroup
  constructor(private store: Store<authstate>) { }

  ngOnInit(): void {
    this.signupFrm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  saveUser() {
    this.store.dispatch(updateStatus({status: true}))
    let email = this.signupFrm.value.email
    let password = this.signupFrm.value.password
    this.store.dispatch(signupStart({ email, password }))
  }
}
