import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingComponents, AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './store/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';



@NgModule({
  declarations: [
    AuthRoutingComponents
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffect]),
    StoreModule.forFeature( 'auth', authReducer )
  ]
})
export class AuthModule { }
