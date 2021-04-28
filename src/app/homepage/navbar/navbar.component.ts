import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/PostsService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // _categorydata:any=[];
  constructor( private router: Router, private postService: PostsService) { }

  ngOnInit(): void {
  }
  onBooks( ){
    var x = document.getElementById("Books").textContent;
    this.postService.getcategoryid(5);
    this.router.navigate(['home/', x]);

  }
  onAuto( ){
    var x = document.getElementById("Auto").textContent;
    this.postService.getcategoryid(3);
    this.router.navigate(['home/', x]);
  }

  onEntertainment( ){
    var x = document.getElementById("Entertainment").textContent;
    //passing the category is
    this.postService.getcategoryid(4);
    this.router.navigate(['home/', x]);
  }
  onGaming(){
    var x = document.getElementById("Gaming").textContent;
    this.postService.getcategoryid(2);
    this.router.navigate(['home/', x]);
  }
  onTechnology( ){
    var x = document.getElementById("Technology").textContent;
    this.postService.getcategoryid(1);
    this.router.navigate(['home/', x]);
  }
}
