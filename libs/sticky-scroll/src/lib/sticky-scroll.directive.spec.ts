import { StickyScrollDirective } from './sticky-scroll.directive';
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StickyScrollModule } from '@unicorn/sticky-scroll';

@Component({
  selector: `host-component`,
  template: `<div *ngIf="show" id="wrapper" unicornStickyScroll style="height: 300px; width: 100%; overflow: scroll;">
    <div style="height: 1000px"></div>
  </div>`
})
class TestHostComponent {
  show = true;
}
describe('StickyScrollDirective', () => {
  function getWrappingElement() {
    return fixture.debugElement.query(By.css('[unicornStickyScroll]')).nativeElement;
  }

  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async function() {
    localStorage.clear();
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [StickyScrollModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    await fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new StickyScrollDirective({} as unknown as ElementRef);
    expect(directive).toBeTruthy();
  });

  it(`should restore the scrollTop of the directive's element`, async function() {
    const startingScrollTop = getWrappingElement().scrollTop;
    getWrappingElement().scrollTop = 500;
    testHostComponent.show = false;
    fixture.detectChanges();
    testHostComponent.show = true;
    fixture.detectChanges();

    expect(startingScrollTop).toEqual(0);
    expect(getWrappingElement().scrollTop).toEqual(500);
  });

  it(`should set the scrollTop after reload of a page`, async function() {
    getWrappingElement().scrollTop = 400;
    window.dispatchEvent(new Event('beforeunload'));

    const directive = fixture.debugElement.query(By.css('[unicornStickyScroll]')).injector.get(StickyScrollDirective);
    getWrappingElement().scrollTop = 0;
    const startingScrollTop = getWrappingElement().scrollTop;
    directive.ngAfterViewInit();

    expect(startingScrollTop).toEqual(0);
    expect(getWrappingElement().scrollTop).toEqual(400);
  });

  it(`should remove beforeunload listener on destroy`, function() {
    window.removeEventListener = jest.fn();
    const directive = fixture.debugElement.query(By.css('[unicornStickyScroll]')).injector.get(StickyScrollDirective);
    directive.ngOnDestroy();
    expect(window.removeEventListener).toHaveBeenCalledWith('beforeunload', directive.ngOnDestroy);
  });

});
