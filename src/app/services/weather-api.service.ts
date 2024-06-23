import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  baseGeoApiUrl = environment.baseGeoApiUrl;
  baseWeatherApiUrl = environment.baseWeatherApiUrl;
  apiKey = environment.apiKey;
  city = environment.city;
  units = environment.units;
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
