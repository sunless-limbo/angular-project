import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  baseGeoApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
  baseWeatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?';
  apiKey = '463cc47a0f3d848c768c537253f9781a';
  city = 'sydney';
  units = 'metric';
  geoApiUrl = `${this.baseGeoApiUrl}q=${this.city}&units=${this.units}&appid=${this.apiKey}`;
  weatherApiUrl = `${this.baseWeatherApiUrl}q=${this.city}&units=${this.units}&appid=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getGeocode(): Observable<any> {
    return this.http.get(`${this.geoApiUrl}`);
  }
  getWeather(): Observable<any> {
    return this.http.get(`${this.weatherApiUrl}`);
  }
}
