import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class CategoriesService{
 private _url ="http://localhost/server/server/api/category/read.php";

 constructor(private http:HttpClient){}

 getAllCategories(){
return this.http.get(this._url);
 }
}
