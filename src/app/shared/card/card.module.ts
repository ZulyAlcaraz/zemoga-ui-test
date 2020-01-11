import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [CardComponent, ProgressBarComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
