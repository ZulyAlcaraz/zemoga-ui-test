import { Component, OnInit, Input } from '@angular/core';

import { Card } from './card.model';

@Component({
  selector: 'zmg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardInfo: Card;

  constructor() { }

  ngOnInit() {
  }
}
