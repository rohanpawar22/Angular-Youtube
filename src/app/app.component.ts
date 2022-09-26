import { Component, OnInit } from '@angular/core';
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

  isSideMenuOpen: boolean = true;

  ngOnInit(): void {
    console.log('init values :', this.isSideMenuOpen);
  }

  hamClicked() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
    console.log('hamburger clicked : ', this.isSideMenuOpen);
  }
}
