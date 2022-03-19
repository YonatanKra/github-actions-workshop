import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

const title = 'title';
const imageSrc = 'https://img.src/';
const description = 'This is a desc';

@Component({
  selector: `host-component`,
  template: `<unicorn-card [title]="'${title}'" [imageSrc]="'${imageSrc}'" [description]="'${description}'"></unicorn-card>`
})
class TestHostComponent {
}
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title with the title's text`, function() {
    component.title = title;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement;

    expect(titleElement.textContent).toEqual(title);
  });

  it(`should set an image according to the image property`, function() {
    component.imageSrc = imageSrc;
    fixture.detectChanges();

    const imageElement = fixture.debugElement.query(By.css('.image')).nativeElement;

    expect(imageElement.src).toEqual(imageSrc);
  });

  it(`should set a description according to the description property`, function() {
    component.description = description;
    fixture.detectChanges();

    const descriptionElement = fixture.debugElement.query(By.css('.description')).nativeElement;

    expect(descriptionElement.textContent).toEqual(description);
  });

  it(`should recieve title, image and description as inputs`, function() {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const titleElement = hostFixture.debugElement.query(By.css('.title')).nativeElement;
    const imageElement = hostFixture.debugElement.query(By.css('.image')).nativeElement;
    const descriptionElement = hostFixture.debugElement.query(By.css('.description')).nativeElement;

    expect(descriptionElement.textContent).toEqual(description);
    expect(imageElement.src).toEqual(imageSrc);
    expect(titleElement.textContent).toEqual(title);
  });
});
