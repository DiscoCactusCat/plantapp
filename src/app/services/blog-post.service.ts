import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) {
    this.getWpPosts();
  }

  private wpPosts: {};
  private thumbsImg = {};

  private getWpPosts(){
    this.thumbsImg = [];
    this.http.get("https://www.quandarrosermaplante.com/wp-json/wp/v2/posts").subscribe(
      (data) => {
        this.wpPosts = data;  
        console.log("Data", data);
        Object.keys(data).forEach(post => {
          console.log("Post", data[post].featured_media);
          this.http.get("https://www.quandarrosermaplante.com/wp-json/wp/v2/media?id="+data[post].featured_media).subscribe(
          (img) => {
            this.thumbsImg= img;  
            console.log("Images",this.thumbsImg);   
          }
        )   
        });
        
           
      }
    )
   
  }

  public getBlogPosts(){
    return this.wpPosts;
  }

  public getPostImage(postIndex: number){
    console.log("Image url",this.thumbsImg[postIndex].source_url);
   return this.thumbsImg[postIndex].source_url;
  }

  public toFrenchDate(wpPostDate: string): Array<string>{
    var date = "";
    var time = "test";
    return [date, time];
  }

}

