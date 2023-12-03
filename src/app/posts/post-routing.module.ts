import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./post/post.component";
import { UpdatePostComponent } from "./update-post/update-post.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostListsComponent } from "./post-lists/post-lists.component";

const postRoutes: Routes = [
    {
        path: '', component: PostComponent,
        children: [
            { path: 'update/:id', component: UpdatePostComponent },
            { path: 'add', component: AddPostComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }
export const PostComponents = [
    PostListsComponent,
    AddPostComponent,
    UpdatePostComponent,
    PostComponent
]