import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  imgags = [
    'assets/images/detail1.jpg',
    'assets/images/detail2.jpg',
    'assets/images/fuji1.jpg',
    'assets/images/fuji2.jpg'
  ];
  public carouselTileItems: Array<any> = [0];
  public carouselTiles = {
    0: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  // public carouselBanner: NguCarouselConfig = {
  //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
  //   slide: 1,
  //   speed: 400,
  //   interval: {
  //     timing: 3000,
  //     initialDelay: 1000
  //   },
  //   point: {
  //     visible: true
  //   },
  //   load: 2,
  //   loop: true,
  //   touch: true
  // }
  constructor() { }

  ngOnInit() {
      this.carouselTileItems.forEach(el => {
        this.carouselTileLoad(el);  
      });
    }

    public carouselTileLoad(j) {
      const len = this.carouselTiles[j].length;
      if (len <= 5) {
        for (let i = len; i < len + 6; i++) {
          this.carouselTiles[j].push(
            this.imgags[Math.floor(Math.random() * this.imgags.length)]
          );
        }
      }
    // this.carouselBanner = {
    //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //   slide: 1,
    //   speed: 400,
    //   interval: {
    //     timing: 3000,
    //     initialDelay: 1000
    //   },
    //   point: {
    //     visible: true
    //   },
    //   load: 2,
    //   loop: true,
    //   touch: true
    // };
  }
}
