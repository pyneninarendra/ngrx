import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { getPosts } from '../store/post.selector';
import { postState } from '../store/post.store';
import { Store } from '@ngrx/store';
import { deletePost } from '../store/post.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent {

  posts$: Observable<any>
  constructor(private store: Store<postState>,private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
  }

  deletePost = (id: any) => {
    this.store.dispatch(deletePost({ id: id }))
    this.router.navigate(['/','post'])
  }
}
