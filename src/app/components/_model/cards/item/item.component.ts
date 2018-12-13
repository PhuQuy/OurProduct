import { Component, OnInit, Input } from '@angular/core';
import { Item } from '@app/model/cards/item/item.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() public item: Item
  constructor() { }
  
  public imgUrl : string;
  ngOnInit() {
  }

}
