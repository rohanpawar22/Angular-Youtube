import { Component, OnInit } from '@angular/core';

import { DogDataService } from '../dog-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  imageURL: string = '';
  constructor(private dogDataService: DogDataService) {}

  ngOnInit(): void {
    this.onButtonClicked();
  }

  onButtonClicked() {
    console.log('bow bow bro');
    this.dogDataService.getDogImage().subscribe((response: any) => {
      console.log('response is : ', response);
      this.imageURL = response.message;
    });
  }
}
