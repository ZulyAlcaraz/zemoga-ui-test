import { Component, OnInit, Input } from '@angular/core';

import { Card } from './card.model';
import { VotesService } from 'src/app/core/votes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'zmg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  thumb: boolean;
  showVotes = true;
  votesForm: FormGroup;

  @Input()
  index: number;

  @Input()
  cardInfo: Card;

  constructor(private readonly votesService: VotesService) { }

  ngOnInit() {
    this.votesForm = new FormGroup({
      thumb: new FormControl('')
    });
  }

  changeThumb(value: boolean) {
    this.thumb = value;
  }

  submit() {
    this.votesService.thumbs(this.index, this.thumb);
    this.votesForm.get('thumb').patchValue('');
    this.votesForm.markAsPristine();
    this.votesForm.markAsUntouched();
    this.showVotes = false;
  }
}
