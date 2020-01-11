import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardModule } from 'src/app/shared/card/card.module';

@NgModule({
  declarations: [
    ...routedComponents,
    HeaderComponent,
    SnackbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ]
})
export class HomeModule { }
