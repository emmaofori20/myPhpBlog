import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/PostsService.service';

@Component({
  selector: 'app-sample-post',
  templateUrl: './sample-post.component.html',
  styleUrls: ['./sample-post.component.scss']
})
export class SamplePostComponent implements OnInit {

  Singlepost: any=[]
  constructor(private postservice:PostsService) { }

  ngOnInit(): void {
    this.postservice.getSinglePost().subscribe(res => this.Singlepost=res)
  }

  open(){
    console.log(this.Singlepost);
  }

}
