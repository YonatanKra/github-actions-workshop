import { TestBed } from '@angular/core/testing';
import { CardsGridModule } from '@unicorn/cards-grid';
import { Component } from '@angular/core';
import { Card } from './cards-grid/cards-grid.component';

@Component({
  selector: `host-component`,
  template: `<unicorn-cards-grid [cards]="cards"></unicorn-cards-grid>`
})
class TestHostComponent {
  cards: Card[];
}
describe(`exportation in the module`, function() {
  beforeEach(async function() {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent ],
      imports: [CardsGridModule]
    })
      .compileComponents();
  });

  it(`should be exported from the CardsGridModule`, function() {
    TestBed.createComponent(TestHostComponent);
  });
});
