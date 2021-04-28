import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-blog';
  constructor(
    private router: Router){}


  ngOnInit(): void {
    if(+window.location.href.includes(" ") == 0){
      this.router.navigate(['home']);
      console.log("yes i am working")
    }else{
      // console.log(" not working");
      // this.router.navigate(['home']);
    }
  }
}
