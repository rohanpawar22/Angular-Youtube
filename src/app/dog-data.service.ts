import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // available at root level : i.e. app component level
})
export class DogDataService {
  API_URL = 'https://dog.ceo/api/breeds/image/random';

  constructor(private httpClient: HttpClient) {}

  getDogImage() {
    return this.httpClient.get(this.API_URL);
    // console.log('response: ', response);
    // return 'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg';
  }
}
