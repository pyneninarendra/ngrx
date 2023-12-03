import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { postState } from '../store/post.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPost } from '../store/post.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostFrm: FormGroup
  constructor(private store: Store<postState>, private router: Router) {}
  ngOnInit(): void {
      this.addPostFrm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(6)]),
        description: new FormControl('', [Validators.required])
      })
  }

  addPost() {
    this.store.dispatch(createPost({post: this.addPostFrm.value}))
    this.router.navigate(['/', 'post'])
  }
}
