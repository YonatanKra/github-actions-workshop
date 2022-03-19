import { Component, Input } from '@angular/core';

@Component({
  selector: 'unicorn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  title: string;
  @Input()
  imageSrc: string;
  @Input()
  description: string;

}
