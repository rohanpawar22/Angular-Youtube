import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.css'],
})
export class MenuButtonsComponent implements OnInit {
  @Input() btnName = '';
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  buttonPressed() {
    console.log(this.btnName);
    this.buttonClicked.emit(this.btnName);
  }

  constructor() {}

  ngOnInit(): void {}
}
