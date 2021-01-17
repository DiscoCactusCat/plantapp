import { BlogPostService } from './../../../services/blog-post.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.scss'],
})
export class BlogPostItemComponent implements OnInit {

  constructor(private postService: BlogPostService) { }

  @Input() post: Object;
  @Input() postIndex: number;
  ngOnInit() {}

  public getPostDate(){
    return (this.postService.toFrenchDate(this.post.modified))[0];
  }
  public getPostTime(){
    return (this.postService.toFrenchDate(this.post.modified))[1];
  }

  public getPostImage(){
    
    return this.postService.getPostImage(this.postIndex);
  }

}
