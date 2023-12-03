import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponents, PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [
    PostComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
  ]
})
export class PostsModule { }
