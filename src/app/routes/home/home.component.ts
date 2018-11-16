import { Component, OnInit } from '@angular/core';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SeoService]
})
export class HomeComponent implements OnInit {
  
  listings: any;

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    this.seoService.generateTags({
        title: 'T - Rex',
        description: 'Tyrannosaurus Rex',
        slug: 'feeds',
        keywords: 'Tyrannosaurus Rex'
    });
  }

}
