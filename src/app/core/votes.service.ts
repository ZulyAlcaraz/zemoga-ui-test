import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Card } from '../shared/card/card.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  private defaultData: Card[] = [
    {
      name: 'Kanye West',
      category: 'Entertainment',
      backgroundUrl: '../../../assets/kanye-west.jpg',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    },
    {
      name: 'Mark Zuckerberg',
      category: 'Business',
      backgroundUrl: '../../../assets/mark-zuckerberg.png',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    },
    {
      name: 'Cristina Fernández de Kirchner',
      category: 'Politics',
      backgroundUrl: '../../../assets/cristina-fernandez.jpg',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    },
    {
      name: 'Malala Yousazai',
      category: 'Entertainment',
      backgroundUrl: '../../../assets/malala.jpg',
      votes: {
        total: 30,
        thumbsUp: 10,
        thumbsDown: 20
      }
    }
  ];

  private _votes: Card[] = this.localStorageService.votes || this.defaultData;
  private get votes(): Card[] {
    return this._votes;
  }
  private set votes(value: Card[]) {
    this._votes = value;
  }

  private cards$ = new BehaviorSubject<Card[]>(this.votes);
  cards = this.cards$.asObservable();

  constructor(private readonly localStorageService: LocalstorageService) {}

  thumbs(index: number, thumbs: boolean) {
    this.votes[index].votes.total = this.votes[index].votes.total + 1;
    if (thumbs) {
      this.votes[index].votes.thumbsUp = this.votes[index].votes.thumbsUp + 1;
    } else {
      this.votes[index].votes.thumbsDown = this.votes[index].votes.thumbsDown + 1;
    }
    this.localStorageService.votes = this.votes;
    this.cards$.next(this.votes);
  }
}
