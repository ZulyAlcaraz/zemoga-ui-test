import { Injectable } from '@angular/core';
import { Card } from '../shared/card/card.model';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  public get votes(): Card[] {
    return JSON.parse(localStorage.getItem('zmgVotes'));
  }
  public set votes(value: Card[]) {
    localStorage.setItem('zmgVotes', JSON.stringify(value));
  }

  constructor() { }
}
