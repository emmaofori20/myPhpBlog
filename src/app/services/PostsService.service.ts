import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { _categories } from '../models/model';

@Injectable()
export class PostsService{
_urlAllPosts= "http://localhost/server/server/api/posts";
singlepost= new Subject<number>();
postid;
categoryid;
post__: any;
valau=[]
  status: string;
  UpdateId: any;
constructor(private http: HttpClient){

}

//get all posts
getAllPosts(){
return this.http.get(this._urlAllPosts + '/read.php');
}
//show single post
getSinglePost(){
  return this.http.get(this._urlAllPosts + '/read_single.php/?id=' +this.postid );
 }

//recieve post id
post(id){
  // this.singlepost.next(id);
  this.postid=id;
}

//recieve a category id
getcategoryid(data){
this.categoryid=data;
}


//create post
createpost(data){
  const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    console.log(body);
    console.log("sucessful");
    this.http.post<any>(this._urlAllPosts + '/create.php', body).subscribe(data=>{
      this.post__=data.id;
    });
}

//delete post
deletePost(i){
  console.log(i)
  this.http.delete(this._urlAllPosts + '/delete.php/?id=' + i).subscribe(() => this.status = 'Delete successful');

}

//getting posts belonging to a particular category
getCategorypost(){
  return this.http.get<_categories[]>(this._urlAllPosts+ '/category_posts.php/?id=' + this.categoryid );
}

//Update a post
updatePost(body){
  this.http.put<any>( this._urlAllPosts + '/update.php', body)
  .subscribe(data => this.UpdateId = data.id);
  console.log(body);
}

//update id
updateid(){
  return this.postid;
}
}

