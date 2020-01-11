import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card/card.model';

@Component({
  selector: 'zmg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [
    {
      name: 'Kanye West',
      category: 'Entertainment',
      backgroundUrl: '../../../assets/kanye-west.jpg',
      totalVotes: 30,
      thumbsUp: 10,
      thumbsDown: 20
    },
    {
      name: 'Mark Zuckerberg',
      category: 'Business',
      backgroundUrl: '../../../assets/mark-zuckerberg.png',
      totalVotes: 30,
      thumbsUp: 10,
      thumbsDown: 20
    },
    {
      name: 'Cristina Fernández de Kirchner',
      category: 'Politics',
      backgroundUrl: '../../../assets/cristina-fernandez.jpg',
      totalVotes: 30,
      thumbsUp: 10,
      thumbsDown: 20
    },
    {
      name: 'Malala Yousazai',
      category: 'Entertainment',
      backgroundUrl: '../../../assets/malala.jpg',
      totalVotes: 30,
      thumbsUp: 10,
      thumbsDown: 20
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
