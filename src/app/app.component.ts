import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-youtube';
  sideMenuList: any = [
    'Home',
    'Explore',
    'Shorts',
    'Originals',
    'Movies',
    'Subscriptions',
  ];
}
