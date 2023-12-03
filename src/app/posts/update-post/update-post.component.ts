import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { postState } from '../store/post.store';
import { ActivatedRoute, Router } from '@angular/router';
import { getPost } from '../store/post.selector';
import { Observable } from 'rxjs';
import { updatePost } from '../store/post.actions';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  updatePostFrm: FormGroup
  id: number
  post: Observable<postState>
  constructor(private store: Store<postState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      res => {
        this.id = Number(res.get('id'))

        this.store.select(getPost, { id: this.id }).subscribe(
          res => {
            this.post = res
            this.updatePostFrm = new FormGroup({
              title: new FormControl(this.post['title'], [Validators.required, Validators.minLength(6)]),
              description: new FormControl(this.post['description'], [Validators.required])
            })
          }
        )
      })

  }

  updatePost() {
    let post = {
      id: this.id,
      title: this.updatePostFrm.value.title,
      description: this.updatePostFrm.value.description
    }
    this.store.dispatch(updatePost({ post: post }))
    this.router.navigate(['/', 'post'])
  }
}
