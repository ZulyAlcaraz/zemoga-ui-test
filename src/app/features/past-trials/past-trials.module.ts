import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrialsRoutingModule, routedComponents } from './past-trials-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    PastTrialsRoutingModule
  ]
})
export class PastTrialsModule { }
