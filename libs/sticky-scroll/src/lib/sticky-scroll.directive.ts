import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

function saveScrollTop(element) {
  const {scrollTop, id} = element;
  localStorage.setItem(id, scrollTop);
}

@Directive({
  selector: '[unicornStickyScroll]'
})
export class StickyScrollDirective implements AfterViewInit, OnDestroy, OnInit{

  constructor(private ref: ElementRef) {
    this.ngOnDestroy = this.ngOnDestroy.bind(this);
  }


  ngOnDestroy(): void {
    window.removeEventListener('beforeunload', this.ngOnDestroy);
    saveScrollTop(this.ref.nativeElement);
  }


  ngAfterViewInit(): void {
    const scrollTop = localStorage.getItem(this.ref.nativeElement.id);
    this.ref.nativeElement.scrollTop = scrollTop;
  }

  ngOnInit(): void {
    window.addEventListener('beforeunload', this.ngOnDestroy);
  }

}
