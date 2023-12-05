import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { spinnerState } from './store/spinner.state';
import { Observable } from 'rxjs';
import { getSpinnerStatus } from './store/spinner.selector'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  status$: Observable<boolean>
  constructor(private store: Store<spinnerState>) { }


  ngOnInit() {
    this.status$ = this.store.select(getSpinnerStatus)
  }

}
