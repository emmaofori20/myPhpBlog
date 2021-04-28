import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from '../models/Categories.model';
import { CategoriesService } from '../services/CategoriesService.service';
import { PostsService } from '../services/PostsService.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
   CreatePostForm: FormGroup;
  //  categories=[{'name': 'Technology'},{'name': 'Gaming'},{'name': 'Entertainment'}];
  category:any;

  constructor( private postservice:PostsService, private route:Router, private categoryService: CategoriesService) { }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(res=> this.category=res.data)
    this.CreatePostForm = new FormGroup({

      title: new FormControl(null, Validators.required),
      body: new FormControl(null,Validators.required),
      author: new FormControl(null),
      category_id: new FormControl(null,Validators.required),
      // 'category_name': new FormControl(null)
    });


  }

  // onChange(cityindex) {
  // //  this.category_id =+cityindex + 1;
  // //  console.log(this.category_id)
  // }
  onsubmit(){
    // console.log(this.CreatePostForm.value);
    this.postservice.createpost(this.CreatePostForm.value);
    this.CreatePostForm.reset();
    alert('Post created successfully');
    this.route.navigate(['home']);
  }
  open(){
    console.log(this.category.data)
  }

}
