import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  apiKey = '463cc47a0f3d848c768c537253f9781a';
  city = 'nairobi';
  units = 'metric';
  geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&units=${this.units}&appid=${this.apiKey}`;
  weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&appid=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getGeocode(): Observable<any> {
    return this.http.get(`${this.geoApiUrl}`);
  }
  getWeather(): Observable<any> {
    return this.http.get(`${this.weatherApiUrl}`);
  }
}
