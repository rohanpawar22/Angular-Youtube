import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-youtube';
  sideMenuList: any = [
    'Home',
    'Explore',
    'Shorts',
    'Orignals',
    'Subscriptions',
    'Movies',
  ];
  isSideMenueOpen: boolean = true;

  ngOnInit(): void {
    console.log('init values :', this.isSideMenueOpen);
  }

  hamClicked() {
    this.isSideMenueOpen = !this.isSideMenueOpen;

    console.log('hamburger clicked : ', this.isSideMenueOpen);
  }
}
