import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './post/posts/posts.component';
import { SpecificPostComponent } from './post/specific-post/specific-post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'post/:id', component: SpecificPostComponent},
  { path: 'create-post', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
