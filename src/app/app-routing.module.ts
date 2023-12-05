import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
    { path: 'post', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
    {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const AppModuleComponents = [
    HomeComponent
]