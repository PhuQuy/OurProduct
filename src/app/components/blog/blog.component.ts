import { Component, OnInit } from '@angular/core';
import { BlogCard } from "../../model/cards/blog-card/blog-card.module";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  customOptions: any = {
    autoWidth: true,
    autoHeight: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navText: ['', ''],  
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    dotsSpeed: 500,
    smartSpeed: 400,
    stagePadding: 10,
    dragEndSpeed: 350,
    // autoplayHoverPause: true
  }
  private blogCards: Array<any> = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }
  private space: number;
  private temps: any;

  ngOnInit() {
    this.loadBlogCards();
  }
  loadBlogCards() {
    this.blogCards = this.blogCards.map(i => {
      return (new BlogCard('Design',
        'loresNisi amet aliquip doloconsequat',
        `assets/images/blogs/blog${i}.jpg`));
    });
    this.space = Math.floor(this.blogCards.length/2);
    this.temps = new Array(this.space);
    console.log(this.space);
  }

}
