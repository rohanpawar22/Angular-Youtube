import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../dog-data.service';

@Component({
  selector: 'app-orignals',
  templateUrl: './orignals.component.html',
  styleUrls: ['./orignals.component.css'],
})
export class OrignalsComponent implements OnInit {
  constructor(private dogDataService: DogDataService) {}

  ngOnInit(): void {
    this.dogDataService.getDogImage().subscribe((response) => {
      console.log('in app orignals');
      console.log(response);
    });
  }
}
