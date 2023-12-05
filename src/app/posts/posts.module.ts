import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponents, PostRoutingModule } from './post-routing.module';
import { StoreModule } from '@ngrx/store';
import { PostReducer } from './store/post.reducer';


@NgModule({
  declarations: [
    PostComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule
  ]
})
export class PostsModule { }
