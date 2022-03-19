import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyScrollDirective } from './sticky-scroll.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [StickyScrollDirective],
  exports: [StickyScrollDirective]
})
export class StickyScrollModule {}
