import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card, CardsGridComponent } from './cards-grid.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';

@Component({
  selector: `host-component`,
  template: `<unicorn-cards-grid [cards]="cards"></unicorn-cards-grid>`
})
class TestHostComponent {
  cards: Card[];
}
describe('CardsGridComponent', () => {
  let testHostComponent: TestHostComponent;
  let component: CardsGridComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CardsGridComponent, CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('unicorn-cards-grid')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should receive cards as input`, function() {
    const cards = [
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      }
    ];
    testHostComponent.cards = cards;
    fixture.detectChanges();
    expect(component.cards).toEqual(cards);
  });

  it(`should create cards elements with the cards input`, function() {
    const cards = [
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      },
      {
        title: 'title1',
        imageSrc: 'imageSrc1',
        description: 'desc1'
      }
    ];
    testHostComponent.cards = cards;
    fixture.detectChanges();
    const cardsElements = fixture.debugElement.queryAll(By.directive(CardComponent));
    const cardsCount = cardsElements.length;
    expect(cardsCount).toEqual(cards.length);
    cardsElements.forEach((cardElement, index) => {
      const data = cards[index];
      Object.keys(data).forEach(key => {
        expect(cardElement.componentInstance[key]).toEqual(data[key]);
      });
    });
  });
});
