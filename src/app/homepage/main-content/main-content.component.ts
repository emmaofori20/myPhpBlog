import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/models/Posts.model';
import { PostsService } from 'src/app/services/PostsService.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  allpost:any=[]
  constructor(private router:Router, private postservice: PostsService) { }

  ngOnInit(): void {
   this.postservice.getAllPosts().subscribe(
     res=> this.allpost= res);
  }



  Openpost(post){
    this.postservice.post(post.id);
    this.router.navigate(['home', post.category_name, post.id]);
  }

}
