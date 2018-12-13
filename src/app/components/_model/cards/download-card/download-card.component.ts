import { Component, OnInit, Input } from '@angular/core';
import { DownloadCard } from '../../../../model/cards/download-card/download-card.module'
@Component({
  selector: 'download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.scss']
})
export class DownloadCardComponent implements OnInit {
  @Input() public downloadCard: DownloadCard
  constructor() { }
  public imgUrl : string;
  ngOnInit() {

  }

}
