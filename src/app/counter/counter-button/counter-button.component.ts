import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {


  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {

  }

  increment() {
    this.store.dispatch(increment())
  }
  
  decrement() {
    this.store.dispatch(decrement())
  }
  
  reset() {
    this.store.dispatch(reset())
  }
}
