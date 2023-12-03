import { Component, OnInit } from '@angular/core';
import { counterState } from '../store/counter.store';
import { Store } from '@ngrx/store';
import { customCounterUpdate, updateCounterName } from '../store/counter.action';
import { getCounterName } from '../store/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  inputNum: any = 0
  counterName: Observable<string>

  constructor(private store: Store<counterState>) { }

  ngOnInit() {
    this.counterName = this.store.select(getCounterName)
  }

  updateCounter() {
    this.store.dispatch(customCounterUpdate({ inputNum: +this.inputNum }))
  }

  updateName() {
    this.store.dispatch(updateCounterName())
  }
}
