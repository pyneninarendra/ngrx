import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sharedState } from './shared/store/shared.state';
import { getErrorMsg, getSharedStatus } from './shared/store/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx';

  status$: Observable<boolean>
  errorMessage$: Observable<any>

  constructor(private store: Store<sharedState>) { }
  
  ngOnInit(): void {
    this.status$ = this.store.select(getSharedStatus)
    this.errorMessage$ = this.store.select(getErrorMsg)
  }
}
