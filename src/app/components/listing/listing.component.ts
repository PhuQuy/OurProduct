import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  @Input() listing: any;

  constructor() {
    this.listing = {
      name: "Catos"
    }
   }

  ngOnInit() {
  }

}
