import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BlogPostService {
  constructor(private http: HttpClient) {
    this.getWpPosts();
  }

  private wpPosts: Object[] = [];
  private wpImages = [];

  private getWpPosts() {
    this.http
      .get("https://www.quandarrosermaplante.com/wp-json/wp/v2/posts")
      .subscribe((data) => {
        for (var i in data) {
          this.wpPosts.push(data[i]);

          this.http
            .get(
              "https://www.quandarrosermaplante.com/wp-json/wp/v2/media/" +
                data[i].featured_media
            )
            .subscribe((imgSource) => {
              this.wpImages.push(imgSource);
            });
        }
      });
  }

  public getBlogPosts() {
    return this.wpPosts;
  }

  public getPostImage(postId: number) {
    var post: any = this.wpPosts.filter((post: any) => post.id == postId)[0];
    var img = this.wpImages.filter((img) => img.id == post.featured_media)[0];
    return img.source_url;
  }

  public toFrenchDate(wpPostDate: string): Array<string> {
    var splitDate = wpPostDate.split("T");
    var date = splitDate[0];
    var time = splitDate[1];
    return [date, time];
  }
}
