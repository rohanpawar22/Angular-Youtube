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
  @Input() isSideMenueOpen: boolean = true;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  buttonPressed() {
    console.log(this.btnName);
    this.buttonClicked.emit(this.btnName);
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside menue button on changes: ', this.isSideMenueOpen);
  }

  ngOnInit(): void {
    console.log('inside menue button : ', this.isSideMenueOpen);
  }

  getClassNameByMenu() {
    switch (this.btnName) {
      case 'Home':
        return 'fa-solid fa-house';
      case 'Explore':
        return 'fa-solid fa-earth-americas';
      case 'Shorts':
        return 'fa-solid fa-heart';
      case 'Orignals':
        return 'fa-solid fa-circle-check';
      case 'Subscriptions':
        return 'fa-solid fa-folder-plus';
      case 'Movies':
        return 'fa-solid fa-tv';
      default:
        return '';
    }
  }
}
