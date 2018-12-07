import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/cards/item/item.module'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  public cards: Array<Item>
  public card: Item
  public active: string
  public clicked: boolean
  ngOnInit() {
    this.cards = [
      new Item('Catos-Saas App landing page', 'landing', 3, 300, "assets/images/item.jpg"),
      new Item('Pemium Templates', 'multipurpose', 3, 300, "assets/images/item.jpg"),
      new Item('Blog vip for sale', 'blog', 3, 300, "assets/images/item.jpg"),
      new Item('Catos-Saas App landing page', 'landing', 3, 300, "assets/images/item.jpg"),
      new Item('Illuminator portfolio', 'portfolio', 3, 300, "assets/images/item.jpg"),
      new Item('Business Easy', 'business', 3, 300, "assets/images/item.jpg")
    ]
    this.active = '';
    console.log(this.cards)
  }
  onToggle(card, type: string) {
    this.active = type;
    // console.log(type);
  }
  filterItemsOfType() {
    if (this.active === '') return this.cards
    return this.cards.filter(x => x.type === this.active);
    // return this.cards
  }
 

}
