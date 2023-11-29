import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterModuleComponents, CounterRoutingModule } from './counter-routing.module';



@NgModule({
  declarations: [
    CounterModuleComponents
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
