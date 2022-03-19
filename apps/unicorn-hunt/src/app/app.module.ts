import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsGridModule } from '@unicorn/cards-grid';
import { StickyScrollModule } from '@unicorn/sticky-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CardsGridModule, StickyScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
