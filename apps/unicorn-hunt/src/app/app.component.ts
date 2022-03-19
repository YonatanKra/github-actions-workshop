import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'company-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cards = [
    {
      title: 'Jane',
      imageSrc: 'https://www.w3schools.com/howto/img_avatar2.png',
      description: 'An amazing manager'
    },
    {
      title: 'John',
      imageSrc: 'https://www.w3schools.com/howto/img_avatar.png',
      description: 'A star developer'
    },
    {
      title: 'Jina',
      imageSrc: 'https://www.w3schools.com/howto/img_avatar2.png',
      description: 'Super Architect'
    },
    {
      title: 'Don',
      imageSrc: 'https://www.w3schools.com/howto/img_avatar.png',
      description: 'Ace marketer'
    },
    {
      title: 'Karen',
      imageSrc: 'https://www.w3schools.com/howto/img_avatar2.png',
      description: 'UX Master'
    },
    {
      title: 'Bond',
      imageSrc: 'https://www.w3schools.com/howto/img_avatar.png',
      description: '007'
    },
  ];
  deployPath = environment.deployPath;
}
