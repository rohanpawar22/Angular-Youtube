import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.css'],
})
export class MenuButtonsComponent implements OnInit, OnChanges {
  @Input() btnName = '';
  @Input() isSideMenuOpen: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside menu button on changes: ', this.isSideMenuOpen);
  }

  ngOnInit(): void {
    console.log('inside menu button: ', this.isSideMenuOpen);
  }

  getClassNameByMenu() {
    switch (this.btnName) {
      case 'Home':
        return 'fa-solid fa-house';
      case 'Explore':
        return 'fa-solid fa-earth-americas';
      case 'Shorts':
        return 'fa-regular fa-heart';
      case 'Originals':
        return 'fa-regular fa-circle-check';
      case 'Movies':
        return 'fa-solid fa-tv';
      case 'Subscriptions':
        return 'fa-regular fa-square-plus';

      default:
        return '';
    }
  }
}
