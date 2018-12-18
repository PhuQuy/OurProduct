import { Component, OnInit, Input } from '@angular/core';

import { BlogCard } from "../../../../model/cards/blog-card/blog-card.module";
@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() public blogCard: BlogCard; 
  constructor() {

   }

  ngOnInit() {
  }

}
