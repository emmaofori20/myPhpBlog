import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUSComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  openCreatePost(){
    this.route.navigate(['CreatePost'])
  }

}
