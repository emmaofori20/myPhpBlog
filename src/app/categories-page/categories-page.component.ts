import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../models/Categories.model';
import { PostsService } from '../services/PostsService.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public CategoryName;
  public CategoryData=[];
  show=true;

  constructor(private postservice: PostsService, private router:Router) { }

  ngOnInit(): void {
    this.postservice.getCategorypost().subscribe(res=> this.CategoryData=res);
    this.postservice.getCategorypost().subscribe(res=> this.CategoryName=res.category_name);

      // this.checker();
      console.log(this.CategoryData)
      // this.Category= JSON.stringify(this.CategoryData)


  }

// checker(){
//   if(this.CategoryData.length()== 0){
//     this.show=!this.show;
//   }

  open(){
    console.log(this.CategoryData);
  }

  onDelete(id){
    // console.log(id);

    this.postservice.deletePost(id);
    alert("Post deleted!")
    this.router.navigate(['home'])
    // this.postservice.getCategorypost().subscribe(res=> this.CategoryData=res.data);
  }

  onUpdate(id){
    console.log(id);
    this.postservice.post(id);
    this.router.navigate(['EditForm']);
    // this.postservice.getSinglePost().subscribe(data=>console.log(data));
  }
}
