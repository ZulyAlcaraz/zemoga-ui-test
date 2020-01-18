import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Card } from './card.model';
import { VotesService } from 'src/app/core/votes.service';

@Component({
  selector: 'zmg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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

  submit() {
    this.votesService.thumbs(this.index, this.votesForm.get('thumb').value);
    this.votesForm.get('thumb').patchValue('');
    this.votesForm.markAsPristine();
    this.votesForm.markAsUntouched();
    this.showVotes = false;
  }
}
