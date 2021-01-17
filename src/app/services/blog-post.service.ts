import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BlogPostService {
  constructor(private http: HttpClient) {
    this.getWpPosts();
  }

  private wpPosts: {};
  private thumbsImg = {};

  private getWpPosts() {
    this.thumbsImg = [];
    this.http
      .get("https://www.quandarrosermaplante.com/wp-json/wp/v2/posts")
      .subscribe((data) => {
        this.wpPosts = data;
        Object.keys(data).forEach((post) => {
          this.http
            .get(
              "https://www.quandarrosermaplante.com/wp-json/wp/v2/media?id=" +
                data[post].featured_media
            )
            .subscribe((img) => {
              this.thumbsImg = img;
            });
        });
      });
  }

  public getBlogPosts() {
    return this.wpPosts;
  }

  public getPostImage(postIndex: number) {
    return this.thumbsImg[postIndex].source_url;
  }

  public toFrenchDate(wpPostDate: string): Array<string> {
    var splitDate = wpPostDate.split("T");
    var date = splitDate[0];
    var time = splitDate[1];
    return [date, time];
  }
}
