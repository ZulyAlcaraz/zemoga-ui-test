import { Component, OnInit, OnDestroy } from '@angular/core';

import { Card } from 'src/app/shared/card/card.model';
import { VotesService } from 'src/app/core/votes.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'zmg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  cards: Card[] = [];
  thumb: boolean;
  private readonly ngUnsubscribe = new Subject();

  constructor(private readonly votesService: VotesService) { }

  ngOnInit() {
    this.votesService.cards
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => this.cards = data);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
