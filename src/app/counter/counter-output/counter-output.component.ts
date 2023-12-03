import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../store/counter.store';
import { getCounter } from '../store/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter: Observable<number>
  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit() {
    this.counter = this.store.select(getCounter)
  }
}
