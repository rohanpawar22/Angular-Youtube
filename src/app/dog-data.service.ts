import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogDataService {
  API_URL = 'https://dog.ceo/api/breeds/image/random';

  constructor(private httpClient: HttpClient) {}

  getDogImage() {
    return this.httpClient.get(this.API_URL);
  }
}
