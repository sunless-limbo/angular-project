import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  weather = ['rainy', 'sunny'];

  getWeather(): string[] {
    return this.weather;
  }
}
/*
   test
  weather = ['rainy', 'sunny'];

  getWeather(): string[] {
    return this.weather;
  }

     Main
  apiUrl =
    'http://api.openweathermap.org/geo/1.0/direct?q=Nairobi&appid=463cc47a0f3d848c768c537253f9781a';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

      2
async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    // Adhere to proper handling of unseemly situations
    throw new Error('Alas, an error hath occurred: ' + response.statusText);
  }
  return await response.text();
}
      3
http.get<Config>('/api/config').subscribe(config => {
  // process the configuration.
});

*/
