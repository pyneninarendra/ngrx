import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  @Output() incrementCounterValue = new EventEmitter<number>()
  @Output() decrementCounterValue = new EventEmitter<number>()
  @Output() resetCounterValue = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {

  }

  increment() {
    this.incrementCounterValue.emit()
  }
  
  decrement() {
    this.decrementCounterValue.emit()
  }
  
  reset() {
    this.resetCounterValue.emit()
  }
}
