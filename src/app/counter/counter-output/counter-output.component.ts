import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../store/counter.store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  counter: any
  counter$: Observable<counterState>
  counterSubscription: Subscription
  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter')
    // this.counterSubscription = this.store.select('counter').subscribe(
    //   res => { this.counter = res }
    // )
  }
  ngOnDestroy() {
    if (this.counter$) {
      this.counterSubscription.unsubscribe()
    }
  }
}
