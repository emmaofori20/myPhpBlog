
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { BrowserModule } from '@angular/platform-browser'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { MainContentComponent } from './homepage/main-content/main-content.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { CreatePostComponent } from './createPost/create-post.component';
import { SamplePostComponent } from './sample-post/sample-post.component';
import {PostsService} from './services/PostsService.service';
import {CategoriesService} from './services/CategoriesService.service';
import { TruncatePipe } from "./truncate.pipe"
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { EditFormComponent } from './edit-form/edit-form.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    FooterComponent,
    AboutUSComponent,
    CreatePostComponent,
    SamplePostComponent,
    TruncatePipe,
    CategoriesPageComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService,CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
