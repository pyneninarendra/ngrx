import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { spinnerState } from './spinner/store/spinner.state';
import { updateStatus } from './spinner/store/spinner.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  constructor(private store: Store<spinnerState>) { }
  ngOnInit(): void {
  }
}
