import { BlogPostService } from './../../services/blog-post.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor(private blogservice : BlogPostService) { }

  ngOnInit() {
  }

  public blogPosts : {};
  

  ionViewWillEnter(){
    this.blogPosts = this.blogservice.getBlogPosts();
    console.log(this.blogPosts);
  }



}
