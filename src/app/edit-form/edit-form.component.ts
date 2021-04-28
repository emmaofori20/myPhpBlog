import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/CategoriesService.service';
import { PostsService } from '../services/PostsService.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  EditPostForm: FormGroup;
  // title = " ";
  // body=" ";
  // author= " ";
  // category_id= " ";
  id='';
  category: any;
  constructor(private postservice: PostsService, private categoryService: CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=> this.category=res.data);
    this.id=this.postservice.updateid();
    this.postservice.getSinglePost().subscribe(data=>{
      this.EditPostForm= new FormGroup({
        'id': new FormControl(this.id),
        'title': new FormControl( data.title),
        'body' : new FormControl(data.body),
        'author': new FormControl(data.author),
        'category_id': new FormControl(data.category_id)
      })
    });
    // this.postservice.getSinglePost().subscribe(data=>{
    //     this.title=data.title,
    //     this.body=data.body,
    //     this.author=data.author,
    //     this.category_id=data.category_id
    // });


    this.initForm();
  }

  private initForm(){

    this.EditPostForm= new FormGroup({
      'id': new FormControl(this.id),
      'title': new FormControl( this.title),
      'body' : new FormControl(this.body),
      'author': new FormControl(this.author),
      'category_id': new FormControl(this.category_id)
    })
  }

  onSubmit(){
    // console.log(this.EditPostForm.value)
    this.postservice.updatePost(this.EditPostForm.value);
    alert('Post updated Succesfully')
    this.router.navigate(['home']);
  }
}
