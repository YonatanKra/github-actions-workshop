import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { CardComponent } from './cards-grid/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsGridComponent, CardComponent],
  exports: [CardsGridComponent, CardComponent]
})
export class CardsGridModule {
}
