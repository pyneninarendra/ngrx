import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterModuleComponents, CounterRoutingModule } from './counter-routing.module';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';



@NgModule({
  declarations: [
    CounterModuleComponents,
    CounterInputComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
