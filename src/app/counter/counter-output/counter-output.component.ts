import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter: any
  constructor(private store: Store<{ counter: { counter: any } }>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(
      res => {
        this.counter = res.counter
      }
    )
  }
}
