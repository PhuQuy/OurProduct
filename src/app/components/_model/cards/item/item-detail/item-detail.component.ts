import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../../../model/cards/item/item.module';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() itemInfor: any;
  constructor() {
    this.itemInfor = {
      version: 12.2,
      compatibility: "WordPress 4.9",
      created: "01 Nov 18",
      lastUpdate: "01 Nov 18",
      layout: "Responsive",
      included: "PHP, HTML, JS , PNG files",
      browsers: "Chrome, Firefox, Opera, Safari, IE, Edge"
    }
  }
  currentRate = 10;
  index = 5;
  public cards: Array<Item>
  public card: Item
  public active: string
  public clicked: boolean
  ngOnInit() {
    this.cards = [
      new Item('Catos-Saas App landing page', 'landing', 3, 300, "assets/images/item.jpg"),
      new Item('Pemium Templates', 'multipurpose', 3, 300, "assets/images/item.jpg")
    ]
    this.active = '';
  }
  onToggle(card, type: string) {
    this.active = type;
  }
  filterItemsOfType() {
    if (this.active === '') return this.cards
    return this.cards.filter(x => x.type === this.active);
  }


}
