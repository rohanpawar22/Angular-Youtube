import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videoCards: any = [
    {
      videoTitle: 'Bajaj Dominar',
      channelName: 'Bajaj',
      channelLogoLink: '',
      videoImageLink:
        'https://i.ytimg.com/vi/5Wv4DhA_fCc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6V0YZqpro9GMWPyVLS2RtNaSvAQ',
      views: '22K',
      time: '1 month ago',
    },
    {
      videoTitle: 'Biggest Chole Bhature',
      channelName: 'Rachit Rawal Vlogs',
      channelLogoLink: '',
      videoImageLink:
        'https://i.ytimg.com/vi/s1tylpuhZYI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQQyDYEl6Hm2Ek8DEU98pVyPPEiA',
      views: '1M',
      time: '2 days ago',
    },
    {
      videoTitle: 'Mumbai Train harbour',
      channelName: 'Doremon',
      channelLogoLink: '',
      videoImageLink:
        'https://i.ytimg.com/vi/B5M3OliT_yg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEjFHu3Nhn0a8nxds5dQkFHaP5Nw',
      views: '200',
      time: '1 year ago',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
