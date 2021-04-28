import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from './homepage/main-content/main-content.component';
import {AboutUSComponent} from './about-us/about-us.component';
import {CreatePostComponent} from './createPost/create-post.component';
import {SamplePostComponent} from './sample-post/sample-post.component';
import {CategoriesPageComponent} from './categories-page/categories-page.component';
import {EditFormComponent} from './edit-form/edit-form.component';

const routes: Routes = [
   {path:' ', redirectTo:'/home',pathMatch:'full'},
   {path:'home', component:MainContentComponent },
   {path:'home/:name/:id',component:SamplePostComponent},
   {path:'home/:name', component: CategoriesPageComponent},
   {path:'AboutUs', component: AboutUSComponent},
   {path:'CreatePost', component:CreatePostComponent},
   {path: 'EditForm', component: EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
