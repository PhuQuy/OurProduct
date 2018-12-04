import { Component, OnInit } from '@angular/core';
import { DownloadCard } from '../../../model/cards/download-card/download-card.module'
@Component({
  selector: 'new-templates',
  templateUrl: './new-templates.component.html',
  styleUrls: ['./new-templates.component.scss']
})
export class NewTemplatesComponent implements OnInit {

  constructor() { }
  public cards: Array<DownloadCard>
  public card: DownloadCard
  public active: string
  public clicked: boolean
  ngOnInit() {
    this.cards = [
      new DownloadCard('Card Title', 'HTML Template', 3, 300, "https://dummyimage.com/286x180/8f078f/0011ff.png"),
      new DownloadCard('Card Title', 'UI Design', 3, 300, "https://dummyimage.com/286x180/8f078f/0011ff.png"),
      new DownloadCard('Card Title', 'WorldPress', 3, 300, "https://dummyimage.com/286x180/8f078f/0011ff.png"),
      new DownloadCard('Card Title', 'HTML Template', 3, 300, "https://dummyimage.com/286x180/8f078f/0011ff.png")
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
